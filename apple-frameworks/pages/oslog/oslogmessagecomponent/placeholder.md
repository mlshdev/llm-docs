> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogmessagecomponent/placeholder](https://developer.apple.com/documentation/oslog/oslogmessagecomponent/placeholder)

# placeholder (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The placeholder text for the message component.

## Declaration

```swift
var placeholder: String { get }
```

<a id="Discussion"></a>

## Discussion

The `placeholder` property holds an empty value when it is the last component.

## See Also

### Reading the Message Component

- [formatSubstring](formatsubstring.md): The text immediately preceding a placeholder.

# placeholder (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The placeholder text for the message component.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * placeholder;
```

<a id="Discussion"></a>

## Discussion

The `placeholder` property holds an empty value when it is the last component.

## See Also

### Reading the Message Component

- [formatSubstring](formatsubstring.md): The text immediately preceding a placeholder.
