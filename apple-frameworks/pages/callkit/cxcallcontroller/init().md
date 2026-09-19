> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxcallcontroller/init()

# init() (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new call controller with a private, serial queue, which is used for calling completion blocks.

## Declaration

```swift
convenience init()
```

<a id="return-value"></a>

## Return Value

A new call controller initialized with a private, serial queue.

## See Also

### Creating New Call Controllers

- [init(queue:)](init%28queue_%29.md): Initializes a new call controller with a specified queue, which is used for calling completion blocks.

# init (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Initializes a new call controller with a private, serial queue, which is used for calling completion blocks.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A new call controller initialized with a private, serial queue.

## See Also

### Creating New Call Controllers

- [initWithQueue:](init%28queue_%29.md): Initializes a new call controller with a specified queue, which is used for calling completion blocks.
