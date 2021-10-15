const Deck = require("./Deck")

// @ponicode
describe("componentWillUpdate", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12345, 12345, 12], [12, 12, 56784], [56784, 12, "a1969970175"]]
        inst = new Deck.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("forceSwipe", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[56784, 12, 987650], [12, "bc23a9d531064583ace8f67dad60f6bb", 56784], [12, 12, "a1969970175"]]
        inst = new Deck.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.forceSwipe("right")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.forceSwipe("Southwest")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.forceSwipe("South")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.forceSwipe("Southeast")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.forceSwipe(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onSwipeComplete", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[56784, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], [56784, 12, "bc23a9d531064583ace8f67dad60f6bb"], [987650, 987650, 56784]]
        inst = new Deck.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSwipeComplete("Southeast")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onSwipeComplete("Southwest")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onSwipeComplete("right")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onSwipeComplete("South")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onSwipeComplete(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onSwipeRight", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], [56784, 987650, 987650], [12345, 56784, 987650]]
        inst = new Deck.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSwipeRight("label_1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onSwipeRight("ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onSwipeRight("label_2")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onSwipeRight("AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onSwipeRight("ISO 9001")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onSwipeRight(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onSwipeLeft", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[987650, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], [12345, "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"], ["bc23a9d531064583ace8f67dad60f6bb", 12345, 12345]]
        inst = new Deck.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSwipeLeft("label_2")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onSwipeLeft("ISO 9001")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onSwipeLeft("ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onSwipeLeft("AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onSwipeLeft("label_3")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onSwipeLeft(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("resetPosition", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[987650, 12345, "bc23a9d531064583ace8f67dad60f6bb"], [12, 12345, 987650], ["bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", 987650]]
        inst = new Deck.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.resetPosition()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getCardStyle", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12, "a1969970175", 12345], [12, 12, 987650], ["bc23a9d531064583ace8f67dad60f6bb", 56784, 987650]]
        inst = new Deck.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getCardStyle()
        }
    
        expect(callFunction).not.toThrow()
    })
})
