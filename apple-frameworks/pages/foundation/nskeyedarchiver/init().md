> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/init()](https://developer.apple.com/documentation/foundation/nskeyedarchiver/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

Initializes an archiver to encode data.

> Use [init(requiringSecureCoding:)](init%28requiringsecurecoding_%29.md) instead.

## Declaration

```swift
init()
```

## See Also

### Creating a Keyed Archiver

- [init(requiringSecureCoding:)](init%28requiringsecurecoding_%29.md): Creates an archiver to encode data, and optionally disables secure coding.
- [init(forWritingWith:)](init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

Initializes an archiver to encode data.

> Use [initRequiringSecureCoding:](init%28requiringsecurecoding_%29.md) instead.

## Declaration

```objectivec
- (instancetype) init;
```

## See Also

### Creating a Keyed Archiver

- [initRequiringSecureCoding:](init%28requiringsecurecoding_%29.md): Creates an archiver to encode data, and optionally disables secure coding.
- [initForWritingWithMutableData:](init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.
