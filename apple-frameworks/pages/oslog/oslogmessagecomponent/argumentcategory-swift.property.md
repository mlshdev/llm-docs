> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogmessagecomponent/argumentcategory-swift.property](https://developer.apple.com/documentation/oslog/oslogmessagecomponent/argumentcategory-swift.property)

# argumentCategory (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The type of argument that corresponds to the placeholder.

## Declaration

```swift
var argumentCategory: OSLogMessageComponent.ArgumentCategory { get }
```

## See Also

### Reading the Argument

- [argument](argument-swift.property.md): The argument passed into the message component.
- [OSLogMessageComponent.Argument](argument-swift.enum.md): An object representing data that corresponds to an argument in a message payload.
- [OSLogMessageComponent.ArgumentCategory](argumentcategory-swift.enum.md): The data type corresponding to the argument provided in a message payload.

# argumentCategory (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The type of argument that corresponds to the placeholder.

## Declaration

```objectivec
@property (nonatomic, readonly) OSLogMessageComponentArgumentCategory argumentCategory;
```

## See Also

### Reading the Argument

- [OSLogMessageComponentArgumentCategory](argumentcategory-swift.enum.md): The data type corresponding to the argument provided in a message payload.
