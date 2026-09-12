> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentruleliststore/default()](https://developer.apple.com/documentation/webkit/wkcontentruleliststore/default())

# default() (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the default content rule list store.

## Declaration

```swift
class func `default`() -> Self!
```

<a id="return-value"></a>

## Return Value

The default rule list store.

<a id="Discussion"></a>

## Discussion

The default store contains the rules that your app created specifically for the current user.

## See Also

### Creating a Content Rule List Store

- [init(url:)](init%28url_%29-dile.md): Creates a new content rule list store in the specified directory.

# defaultStore (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the default content rule list store.

## Declaration

```objectivec
+ (instancetype) defaultStore;
```

<a id="return-value"></a>

## Return Value

The default rule list store.

<a id="Discussion"></a>

## Discussion

The default store contains the rules that your app created specifically for the current user.

## See Also

### Creating a Content Rule List Store

- [storeWithURL:](init%28url_%29-dile.md): Creates a new content rule list store in the specified directory.
