> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/sortedcookies(using:)](https://developer.apple.com/documentation/foundation/httpcookiestorage/sortedcookies(using:))

# sortedCookies(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.

## Declaration

```swift
func sortedCookies(using sortOrder: [NSSortDescriptor]) -> [HTTPCookie]
```

## Parameters

- `sortOrder`: The sort descriptors to use for sorting, as an array of [NSSortDescriptor](../nssortdescriptor.md) objects.

<a id="return-value"></a>

## Return Value

The cookie storage’s cookies, sorted according to `sortOrder`, as an array of [HTTPCookie](../httpcookie.md) objects.

## See Also

### Retrieving cookies

- [cookies](cookies.md): The cookie storage’s cookies.
- [getCookiesFor(\_:completionHandler:)](getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [cookies(for:)](cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.

# sortedCookiesUsingDescriptors: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.

## Declaration

```objectivec
- (NSArray<NSHTTPCookie *> *) sortedCookiesUsingDescriptors:(NSArray<NSSortDescriptor *> *) sortOrder;
```

## Parameters

- `sortOrder`: The sort descriptors to use for sorting, as an array of [NSSortDescriptor](../nssortdescriptor.md) objects.

<a id="return-value"></a>

## Return Value

The cookie storage’s cookies, sorted according to `sortOrder`, as an array of [NSHTTPCookie](../httpcookie.md) objects.

## See Also

### Retrieving cookies

- [cookies](cookies.md): The cookie storage’s cookies.
- [getCookiesForTask:completionHandler:](getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [cookiesForURL:](cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.
