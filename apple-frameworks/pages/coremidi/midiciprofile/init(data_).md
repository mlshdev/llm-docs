> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofile/init(data:)](https://developer.apple.com/documentation/coremidi/midiciprofile/init(data:))

# init(data:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a MIDI profile for the specified data.

## Declaration

```swift
init(data: Data)
```

## Parameters

- `data`: The profile’s unique byte sequence.

## See Also

### Creating a Profile

- [init(data:name:)](init%28data_name_%29.md): Creates a named MIDI profile for the specified data.

# initWithData: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a MIDI profile for the specified data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: The profile’s unique byte sequence.

## See Also

### Creating a Profile

- [initWithData:name:](init%28data_name_%29.md): Creates a named MIDI profile for the specified data.
