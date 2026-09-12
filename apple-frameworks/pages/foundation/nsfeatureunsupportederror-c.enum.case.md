> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfeatureunsupportederror-c.enum.case](https://developer.apple.com/documentation/foundation/nsfeatureunsupportederror-c.enum.case)

# NSFeatureUnsupportedError

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The feature isn’t supported, because the file system lacks the feature, or required libraries are missing, or other similar reasons.

## Declaration

```objectivec
NSFeatureUnsupportedError
```

<a id="Discussion"></a>

## Discussion

For example, some volumes may not support a Trash folder, so these methods will report failure by returning [false](https://developer.apple.com/documentation/swift/false) or `nil` and an [NSError](nserror.md) with [NSFeatureUnsupportedError](nsfeatureunsupportederror-swift.var.md).

## See Also

### Miscellaneous Errors

- [NSKeyValueValidationError](nskeyvaluevalidationerror-c.enum.case.md): A key-value coding validation error.
