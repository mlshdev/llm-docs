> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofile/init(data:name:)](https://developer.apple.com/documentation/coremidi/midiciprofile/init(data:name:))

# init(data:name:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a named MIDI profile for the specified data.

## Declaration

```swift
init(data: Data, name inName: String)
```

## Parameters

- `data`: The profile’s unique byte sequence.
- `inName`: The profile name.

## See Also

### Creating a Profile

- [init(data:)](init%28data_%29.md): Creates a MIDI profile for the specified data.

# initWithData:name: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a named MIDI profile for the specified data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data name:(NSString *) inName;
```

## Parameters

- `data`: The profile’s unique byte sequence.
- `inName`: The profile name.

## See Also

### Creating a Profile

- [initWithData:](init%28data_%29.md): Creates a MIDI profile for the specified data.
