> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentruleliststore/init(url:)-dile](https://developer.apple.com/documentation/webkit/wkcontentruleliststore/init(url:)-dile)

# init(url:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Creates a new content rule list store in the specified directory.

## Declaration

```swift
convenience init!(url: URL!)
```

## Parameters

- `url`: A URL that specifies a directory. The returned object uses this directory to store its content rules persistently. For example, you might store your app-specific rules in your app’s container directory.

<a id="return-value"></a>

## Return Value

A content rule store associated with the specified directory.

<a id="Discussion"></a>

## Discussion

If the specified directory already contains compiled rule lists, this method loads those rules and adds them to the returned object. If you change any rules after creating this object, the store saves those changes to the same directory.

## See Also

### Creating a Content Rule List Store

- [default()](default%28%29.md): Returns the default content rule list store.

# storeWithURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Creates a new content rule list store in the specified directory.

## Declaration

```objectivec
+ (instancetype) storeWithURL:(NSURL *) url;
```

## Parameters

- `url`: A URL that specifies a directory. The returned object uses this directory to store its content rules persistently. For example, you might store your app-specific rules in your app’s container directory.

<a id="return-value"></a>

## Return Value

A content rule store associated with the specified directory.

<a id="Discussion"></a>

## Discussion

If the specified directory already contains compiled rule lists, this method loads those rules and adds them to the returned object. If you change any rules after creating this object, the store saves those changes to the same directory.

## See Also

### Creating a Content Rule List Store

- [defaultStore](default%28%29.md): Returns the default content rule list store.
