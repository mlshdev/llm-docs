> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentrywithpayload/subsystem](https://developer.apple.com/documentation/oslog/oslogentrywithpayload/subsystem)

# subsystem (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payload’s subsystem.

## Declaration

```swift
var subsystem: String { get }
```

<a id="Discussion"></a>

## Discussion

The category is derived from the `os_log_t` handle used.

## See Also

### Elements of a Payload

- [category](category.md): The payload’s category.
- [components](components.md): The payload’s components.
- [formatString](formatstring.md): The payload’s format string.

# subsystem (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payload’s subsystem.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * subsystem;
```

<a id="Discussion"></a>

## Discussion

The category is derived from the `os_log_t` handle used.

## See Also

### Elements of a Payload

- [category](category.md): The payload’s category.
- [components](components.md): The payload’s components.
- [formatString](formatstring.md): The payload’s format string.
