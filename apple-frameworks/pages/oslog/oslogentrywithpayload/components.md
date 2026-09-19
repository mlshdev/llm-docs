> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/oslog/oslogentrywithpayload/components

# components (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payload’s components.

## Declaration

```swift
var components: [OSLogMessageComponent] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [OSLogMessageComponent](../oslogmessagecomponent.md) objects from the composed message.

## See Also

### Elements of a Payload

- [category](category.md): The payload’s category.
- [formatString](formatstring.md): The payload’s format string.
- [subsystem](subsystem.md): The payload’s subsystem.

# components (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payload’s components.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<OSLogMessageComponent *> * components;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [OSLogMessageComponent](../oslogmessagecomponent.md) objects from the composed message.

## See Also

### Elements of a Payload

- [category](category.md): The payload’s category.
- [formatString](formatstring.md): The payload’s format string.
- [subsystem](subsystem.md): The payload’s subsystem.
