> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentvaluepropertiescallable/dynamicallycall(withkeywordarguments:)](https://developer.apple.com/documentation/appintentstesting/intentvaluepropertiescallable/dynamicallycall(withkeywordarguments:))

# dynamicallyCall(withKeywordArguments:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns an instance of `T` by applying the provided argument values to the properties.

## Declaration

```swift
func dynamicallyCall(withKeywordArguments args: KeyValuePairs<String, (any IntentValueExpressing)?>) -> T
```

<a id="discussion"></a>

## Discussion

Typically, you use this subscript implicitly via function-call syntax, for example:

```swift
let intent = CreateCoffeeIntent.makeIntent(customerName: "MyName", size: 12.0)
```

This is equivalent to the desugared syntax:

```swift
let intent = CreateCoffeeIntent.makeIntent.dynamicallyCall([
    "customerName": "MyName",
    "size": 12.0
])
```
