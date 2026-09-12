> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webarchive/init(data:)](https://developer.apple.com/documentation/webkit/webarchive/init(data:))

# init(data:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes and returns the receiver, specifying the initial content data.

## Declaration

```swift
init!(data: Data!)
```

<a id="Discussion"></a>

## Discussion

Use the [data](data.md) method to get the receiver’s data.

## See Also

### Initializing

- [init(mainResource:subresources:subframeArchives:)](init%28mainresource_subresources_subframearchives_%29.md): Deprecated. Initializes the receiver with a resource and optional subresources and subframe archives..

# initWithData: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes and returns the receiver, specifying the initial content data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

<a id="Discussion"></a>

## Discussion

Use the [data](data.md) method to get the receiver’s data.

## See Also

### Initializing

- [initWithMainResource:subresources:subframeArchives:](init%28mainresource_subresources_subframearchives_%29.md): Deprecated. Initializes the receiver with a resource and optional subresources and subframe archives..
