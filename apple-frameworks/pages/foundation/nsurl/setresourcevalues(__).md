> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/setresourcevalues(_:)](https://developer.apple.com/documentation/foundation/nsurl/setresourcevalues(_:))

# setResourceValues(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the URL’s resource properties for a given set of keys to a given set of values.

## Declaration

```swift
func setResourceValues(_ keyedValues: [URLResourceKey : Any]) throws
```

## Parameters

- `keyedValues`: A dictionary of resource values to be set.

<a id="Discussion"></a>

## Discussion

This method synchronously writes the new resource value out to disk. If an error occurs after some resource properties have been successfully changed, the `userInfo` dictionary in the returned error object contains a `kCFURLKeysOfUnsetValuesKey` key whose value is an array of the resource values that were not successfully set.

Attempts to set a read-only resource property or to set a resource property that is not supported by the resource are ignored and are not considered errors.

The order in which the resource values are set is not defined. If you need to guarantee the order in which resource values are set, you should make multiple requests to this method or [setResourceValue(\_:forKey:)](setresourcevalue%28__forkey_%29.md).

> **Note**

>  This method applies only to URLs for file system resources.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Accessing Resource Values

- [resourceValues(forKeys:)](resourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
- [getResourceValue(\_:forKey:)](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [setResourceValue(\_:forKey:)](setresourcevalue%28__forkey_%29.md): Sets the URL’s resource property for a given key to a given value.
- [removeAllCachedResourceValues()](removeallcachedresourcevalues%28%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [removeCachedResourceValue(forKey:)](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given key from the URL object.
- [setTemporaryResourceValue(\_:forKey:)](settemporaryresourcevalue%28__forkey_%29.md): Sets a temporary resource value on the URL object.
- [URLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.

# setResourceValues:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the URL’s resource properties for a given set of keys to a given set of values.

## Declaration

```objectivec
- (BOOL) setResourceValues:(NSDictionary<NSString *,id> *) keyedValues error:(NSError **) error;
```

## Parameters

- `keyedValues`: A dictionary of resource values to be set.
- `error`: The error that occurred if one or more resource values could not be set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all resource values in `keyedValues` are successfully set; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method synchronously writes the new resource value out to disk. If an error occurs after some resource properties have been successfully changed, the `userInfo` dictionary in the returned error object contains a `kCFURLKeysOfUnsetValuesKey` key whose value is an array of the resource values that were not successfully set.

Attempts to set a read-only resource property or to set a resource property that is not supported by the resource are ignored and are not considered errors.

The order in which the resource values are set is not defined. If you need to guarantee the order in which resource values are set, you should make multiple requests to this method or [setResourceValue:forKey:error:](setresourcevalue%28__forkey_%29.md).

> **Note**

>  This method applies only to URLs for file system resources.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Accessing Resource Values

- [resourceValuesForKeys:error:](resourcevalues%28forkeys_%29.md): Returns the resource values for the properties identified by specified array of keys.
- [getResourceValue:forKey:error:](getresourcevalue%28__forkey_%29.md): Returns the value of the resource property for the specified key.
- [setResourceValue:forKey:error:](setresourcevalue%28__forkey_%29.md): Sets the URL’s resource property for a given key to a given value.
- [removeAllCachedResourceValues](removeallcachedresourcevalues%28%29.md): Removes all cached resource values and temporary resource values from the URL object.
- [removeCachedResourceValueForKey:](removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given key from the URL object.
- [setTemporaryResourceValue:forKey:](settemporaryresourcevalue%28__forkey_%29.md): Sets a temporary resource value on the URL object.
- [NSURLResourceKey](../urlresourcekey.md): Keys that apply to file system URLs.
