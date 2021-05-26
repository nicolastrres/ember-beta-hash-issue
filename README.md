# reproduce-hash-issue

Reproduces an issue with the `hash` helper introduced in the latest ember beta version.

### Steps to reproduce
1. Run ember s
2. Open the console to see the error

```
Uncaught TypeError: Cannot destructure property 'tag' of 'ref' as it is undefined.
    at valueForRef (reference.js:144)
    at runtime.js:6931
    at track (validator.js:820)
    at tagForKey (runtime.js:6931)
    at runtime.js:7006
    at tagForProperty (index.js:516)
    at getChainTags (index.js:907)
    at getChainTagsForKeys (index.js:824)
    at ComputedProperty.get (index.js:1939)
    at ExampleComponentComponent.getter [as label] (index.js:1024)
```

The issue is raised when there is a computed property that observes a property of an object created with the `hash` helper and the observed property is undefined.
