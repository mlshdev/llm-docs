> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/propertyforkeyifavailable:](https://developer.apple.com/documentation/foundation/nsurlhandle/propertyforkeyifavailable:)

# propertyForKeyIfAvailable:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns the property for the specified key only if the value is already available; that is, the client doesn’t need to do any work.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (id) propertyForKeyIfAvailable:(NSString *) propertyKey;
```

## Parameters

- `propertyKey`: The key of the desired property.

<a id="return-value"></a>

## Return Value

The value associated with `propertyKey`. Returns `nil` if there is no such key or if the client would have to do work to fetch the property.

## See Also

### Setting and getting resource properties

- [propertyForKey:](propertyforkey_.md): Deprecated. Returns the property for the specified key.
- [writeProperty:forKey:](writeproperty_forkey_.md): Deprecated. Sets the property of the receiver’s resource for a specified key to the specified value.
