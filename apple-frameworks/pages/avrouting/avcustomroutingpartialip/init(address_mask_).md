> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avrouting/avcustomroutingpartialip/init(address:mask:)

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
