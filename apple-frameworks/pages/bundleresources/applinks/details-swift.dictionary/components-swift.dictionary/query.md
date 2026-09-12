> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/applinks/details-swift.dictionary/components-swift.dictionary/query](https://developer.apple.com/documentation/bundleresources/applinks/details-swift.dictionary/components-swift.dictionary/query)

# applinks.Details.Components.Query (Swift)

**Framework:** Bundle Resources  
**Kind:** Object  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of names and values to match with query items in a URL.

## Declaration

```swift
object applinks.Details.Components.Query
```

## Properties

- `Any Key` — `string`:

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are [NSURLQueryItem](../../../../foundation/nsurlqueryitem.md) names and the values are patterns to match with the specified key’s value. This example code shows how to use a dictionary object for pattern matching with a URL query component:

```javascript
"?": { "productID": "12345" }
```

The above definition matches a URL query component that has a name of `productID` and a value of `12345`.

# applinks.Details.Components.Query (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Object  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of names and values to match with query items in a URL.

## Declaration

```objectivec
object applinks.Details.Components.Query
```

## Properties

- `Any Key` — `string`:

<a id="Discussion"></a>

## Discussion

The keys in this dictionary are [NSURLQueryItem](../../../../foundation/nsurlqueryitem.md) names and the values are patterns to match with the specified key’s value. This example code shows how to use a dictionary object for pattern matching with a URL query component:

```javascript
"?": { "productID": "12345" }
```

The above definition matches a URL query component that has a name of `productID` and a value of `12345`.
