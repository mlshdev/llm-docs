> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload/deletecontent(forproductid:)](https://developer.apple.com/documentation/storekit/skdownload/deletecontent(forproductid:))

# deleteContent(forProductID:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0)

Deletes the previously downloaded file.

> Hosted content is no longer supported.

## Declaration

```swift
class func deleteContent(forProductID productID: String)
```

## Parameters

- `productID`: The product identifier.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

## See Also

### Managing Downloaded Content

- [contentURL(forProductID:)](contenturl%28forproductid_%29.md): Deprecated. Returns the local location for the previously downloaded flie.

# deleteContentForProductID: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0)

Deletes the previously downloaded file.

> Hosted content is no longer supported.

## Declaration

```objectivec
+ (void) deleteContentForProductID:(NSString *) productID;
```

## Parameters

- `productID`: The product identifier.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

## See Also

### Managing Downloaded Content

- [contentURLForProductID:](contenturl%28forproductid_%29.md): Deprecated. Returns the local location for the previously downloaded flie.
