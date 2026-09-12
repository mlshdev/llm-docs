> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingpartialip/init(address:mask:)](https://developer.apple.com/documentation/avrouting/avcustomroutingpartialip/init(address:mask:))

# init(address:mask:) (Swift)

**Framework:** AVRouting  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

Creates an IP fragment.

## Declaration

```swift
init(address: Data, mask: Data)
```

## Parameters

- `address`: The IP address.
- `mask`: The address mask.

# initWithAddress:mask: (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · visionOS 1.0+

Creates an IP fragment.

## Declaration

```objectivec
- (instancetype) initWithAddress:(NSData *) address mask:(NSData *) mask;
```

## Parameters

- `address`: The IP address.
- `mask`: The address mask.
