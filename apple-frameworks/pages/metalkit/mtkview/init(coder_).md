> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/init(coder:)](https://developer.apple.com/documentation/metalkit/mtkview/init(coder:))

# init(coder:) (Swift)

**Framework:** MetalKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a view from data in a given unarchiver.

## Declaration

```swift
init(coder: NSCoder)
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

An initialized view object.

## See Also

### Creating a View

- [init(frame:device:)](init%28frame_device_%29.md): Initializes a view with the specified frame rectangle and Metal device.

# initWithCoder: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a view from data in a given unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

An initialized view object.

## See Also

### Creating a View

- [initWithFrame:device:](init%28frame_device_%29.md): Initializes a view with the specified frame rectangle and Metal device.
