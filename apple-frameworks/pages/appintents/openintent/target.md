> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/openintent/target](https://developer.apple.com/documentation/appintents/openintent/target)

# target

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The item to open in your app.

## Declaration

```swift
var target: Self.Value { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to a dynamic or static type your app defines, such as an [AppEntity](../appentity.md) or [AppEnum](../appenum.md). Use this value to determine what content to show in your app’s interface.

## See Also

### Getting the item to open

- [Value](value.md): The type of the item to open.
