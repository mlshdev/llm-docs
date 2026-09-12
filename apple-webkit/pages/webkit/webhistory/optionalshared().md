> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/optionalshared()](https://developer.apple.com/documentation/webkit/webhistory/optionalshared())

# optionalShared() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a shared web history object, if one exists.

## Declaration

```swift
class func optionalShared() -> WebHistory!
```

<a id="return-value"></a>

## Return Value

A shared web history object initialized with the default web history file, or `nil` if one was not previously specified using the [setOptionalShared(\_:)](setoptionalshared%28__%29.md) method.

## See Also

### Related Documentation

- [load(from:)](load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.
- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Accessing Shared History Objects

- [setOptionalShared(\_:)](setoptionalshared%28__%29.md): Deprecated. Sets the web history object to share.

# optionalSharedHistory (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a shared web history object, if one exists.

## Declaration

```objectivec
+ (WebHistory *) optionalSharedHistory;
```

<a id="return-value"></a>

## Return Value

A shared web history object initialized with the default web history file, or `nil` if one was not previously specified using the [setOptionalSharedHistory:](setoptionalshared%28__%29.md) method.

## See Also

### Related Documentation

- [loadFromURL:error:](load%28from_%29.md): Deprecated. Loads the contents of the specified web history file.
- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Accessing Shared History Objects

- [setOptionalSharedHistory:](setoptionalshared%28__%29.md): Deprecated. Sets the web history object to share.
