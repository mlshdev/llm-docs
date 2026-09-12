> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/remove(_:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/remove(_:))

# remove(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes an observer from the cookie store.

## Declaration

```swift
func remove(_ observer: any WKHTTPCookieStoreObserver)
```

## Parameters

- `observer`: The observer object to remove.

## See Also

### Observing cookie store changes

- [add(\_:)](add%28__%29.md): Adds an observer to the cookie store.
- [WKHTTPCookieStoreObserver](../wkhttpcookiestoreobserver.md): The methods to adopt in an object that monitors changes to a webpage’s cookies.

# removeObserver: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Removes an observer from the cookie store.

## Declaration

```objectivec
- (void) removeObserver:(id<WKHTTPCookieStoreObserver>) observer;
```

## Parameters

- `observer`: The observer object to remove.

## See Also

### Observing cookie store changes

- [addObserver:](add%28__%29.md): Adds an observer to the cookie store.
- [WKHTTPCookieStoreObserver](../wkhttpcookiestoreobserver.md): The methods to adopt in an object that monitors changes to a webpage’s cookies.
