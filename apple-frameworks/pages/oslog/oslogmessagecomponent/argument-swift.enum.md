> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogmessagecomponent/argument-swift.enum](https://developer.apple.com/documentation/oslog/oslogmessagecomponent/argument-swift.enum)

# OSLogMessageComponent.Argument

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object representing data that corresponds to an argument in a message payload.

## Declaration

```swift
enum Argument
```

## Topics

### Constants

- [OSLogMessageComponent.Argument.data(\_:)](argument-swift.enum/data%28__%29.md): A data object returned by the [OSLog](../../oslog.md) API that corresponds to the argument.
- [OSLogMessageComponent.Argument.double(\_:)](argument-swift.enum/double%28__%29.md): A double returned by the [OSLog](../../oslog.md) API that corresponds to the argument.
- [OSLogMessageComponent.Argument.signed(\_:)](argument-swift.enum/signed%28__%29.md): A signed 64-bit integer returned by the [OSLog](../../oslog.md) API that corresponds to the argument.
- [OSLogMessageComponent.Argument.string(\_:)](argument-swift.enum/string%28__%29.md): A string returned by the [OSLog](../../oslog.md) API that corresponds to the argument.
- [OSLogMessageComponent.Argument.undefined](argument-swift.enum/undefined.md): A undefined object returned by the OSLog API that corresponds to the argument.
- [OSLogMessageComponent.Argument.unsigned(\_:)](argument-swift.enum/unsigned%28__%29.md): An unsigned 64-bit integer returned by the OSLog API that corresponds to the argument.

## See Also

### Reading the Argument

- [argument](argument-swift.property.md): The argument passed into the message component.
- [argumentCategory](argumentcategory-swift.property.md): The type of argument that corresponds to the placeholder.
- [OSLogMessageComponent.ArgumentCategory](argumentcategory-swift.enum.md): The data type corresponding to the argument provided in a message payload.
