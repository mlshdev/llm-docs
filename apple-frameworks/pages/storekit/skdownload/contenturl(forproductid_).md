> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/contenturl(forproductid:)](https://developer.apple.com/documentation/storekit/skdownload/contenturl(forproductid:))

# contentURL(forProductID:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0)

Returns the local location for the previously downloaded flie.

> Hosted content is no longer supported.

## Declaration

```swift
class func contentURL(forProductID productID: String) -> URL?
```

## Parameters

- `productID`: The product identifier.

<a id="return-value"></a>

## Return Value

The local location for the previously downloaded flie.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

Use this method to locate the content on subsequent launches of your app.

## See Also

### Managing Downloaded Content

- [deleteContent(forProductID:)](deletecontent%28forproductid_%29.md): Deprecated. Deletes the previously downloaded file.

# contentURLForProductID: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0)

Returns the local location for the previously downloaded flie.

> Hosted content is no longer supported.

## Declaration

```objectivec
+ (NSURL *) contentURLForProductID:(NSString *) productID;
```

## Parameters

- `productID`: The product identifier.

<a id="return-value"></a>

## Return Value

The local location for the previously downloaded flie.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

Use this method to locate the content on subsequent launches of your app.

## See Also

### Managing Downloaded Content

- [deleteContentForProductID:](deletecontent%28forproductid_%29.md): Deprecated. Deletes the previously downloaded file.
