> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckoperationgroup/init(coder:)

# init(coder:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an operation group from a serialized instance.

## Declaration

```swift
init(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: The coder to use when deserializing the group.

## See Also

### Creating an Operation Group

- [init()](init%28%29.md): Creates an operation group.

# initWithCoder: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an operation group from a serialized instance.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: The coder to use when deserializing the group.

## See Also

### Creating an Operation Group

- [init](init%28%29.md): Creates an operation group.
