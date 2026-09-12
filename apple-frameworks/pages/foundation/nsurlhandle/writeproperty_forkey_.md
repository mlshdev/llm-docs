> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/writeproperty:forkey:](https://developer.apple.com/documentation/foundation/nsurlhandle/writeproperty:forkey:)

# writeProperty:forKey:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Sets the property of the receiver’s resource for a specified key to the specified value.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (BOOL) writeProperty:(id) propertyValue forKey:(NSString *) propertyKey;
```

## Parameters

- `propertyValue`: The new value for the property.
- `propertyKey`: The key of the desired property.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the modification was successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.

## See Also

### Setting and getting resource properties

- [propertyForKey:](propertyforkey_.md): Deprecated. Returns the property for the specified key.
- [propertyForKeyIfAvailable:](propertyforkeyifavailable_.md): Deprecated. Returns the property for the specified key only if the value is already available; that is, the client doesn’t need to do any work.
