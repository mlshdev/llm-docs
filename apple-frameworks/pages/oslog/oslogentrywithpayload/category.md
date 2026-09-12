> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentrywithpayload/category](https://developer.apple.com/documentation/oslog/oslogentrywithpayload/category)

# category (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payload’s category.

## Declaration

```swift
var category: String { get }
```

<a id="Discussion"></a>

## Discussion

The category is derived from the `os_log_t` handle used.

## See Also

### Elements of a Payload

- [components](components.md): The payload’s components.
- [formatString](formatstring.md): The payload’s format string.
- [subsystem](subsystem.md): The payload’s subsystem.

# category (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The payload’s category.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * category;
```

<a id="Discussion"></a>

## Discussion

The category is derived from the `os_log_t` handle used.

## See Also

### Elements of a Payload

- [components](components.md): The payload’s components.
- [formatString](formatstring.md): The payload’s format string.
- [subsystem](subsystem.md): The payload’s subsystem.
