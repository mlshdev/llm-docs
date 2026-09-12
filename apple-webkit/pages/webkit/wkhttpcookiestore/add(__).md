> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/add(_:)](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/add(_:))

# add(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Adds an observer to the cookie store.

## Declaration

```swift
func add(_ observer: any WKHTTPCookieStoreObserver)
```

## Parameters

- `observer`: The observer object to add. The cookie store doesn’t maintain a strong reference to the object you specify. You are responsible for removing your observer object before it becomes invalid.

## See Also

### Observing cookie store changes

- [remove(\_:)](remove%28__%29.md): Removes an observer from the cookie store.
- [WKHTTPCookieStoreObserver](../wkhttpcookiestoreobserver.md): The methods to adopt in an object that monitors changes to a webpage’s cookies.

# addObserver: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Adds an observer to the cookie store.

## Declaration

```objectivec
- (void) addObserver:(id<WKHTTPCookieStoreObserver>) observer;
```

## Parameters

- `observer`: The observer object to add. The cookie store doesn’t maintain a strong reference to the object you specify. You are responsible for removing your observer object before it becomes invalid.

## See Also

### Observing cookie store changes

- [removeObserver:](remove%28__%29.md): Removes an observer from the cookie store.
- [WKHTTPCookieStoreObserver](../wkhttpcookiestoreobserver.md): The methods to adopt in an object that monitors changes to a webpage’s cookies.
