> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogmessagecomponent/formatsubstring](https://developer.apple.com/documentation/oslog/oslogmessagecomponent/formatsubstring)

# formatSubstring (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The text immediately preceding a placeholder.

## Declaration

```swift
var formatSubstring: String { get }
```

<a id="Discussion"></a>

## Discussion

The `formatSubstring` property can be an empty string if there is nothing between two placeholders, or if it is between the placeholder and the bounds of the string.

## See Also

### Reading the Message Component

- [placeholder](placeholder.md): The placeholder text for the message component.

# formatSubstring (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The text immediately preceding a placeholder.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * formatSubstring;
```

<a id="Discussion"></a>

## Discussion

The `formatSubstring` property can be an empty string if there is nothing between two placeholders, or if it is between the placeholder and the bounds of the string.

## See Also

### Reading the Message Component

- [placeholder](placeholder.md): The placeholder text for the message component.
