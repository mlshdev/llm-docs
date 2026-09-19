> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksharerequestaccessoperation/init(shareurls:)

# init(shareURLs:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a share request access operation configured with specified share URLs.

## Declaration

```swift
convenience init(shareURLs: [URL])
```

## Parameters

- `shareURLs`: An array of `NSURL` objects representing the shares to request access to.

<a id="return-value"></a>

## Return Value

A configured [CKShareRequestAccessOperation](../cksharerequestaccessoperation.md) instance.

# initWithShareURLs: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a share request access operation configured with specified share URLs.

## Declaration

```objectivec
- (instancetype) initWithShareURLs:(NSArray<NSURL *> *) shareURLs;
```

## Parameters

- `shareURLs`: An array of `NSURL` objects representing the shares to request access to.

<a id="return-value"></a>

## Return Value

A configured [CKShareRequestAccessOperation](../cksharerequestaccessoperation.md) instance.
