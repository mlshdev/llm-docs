> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/preservationpriority(fortag:)](https://developer.apple.com/documentation/foundation/bundle/preservationpriority(fortag:))

# preservationPriority(forTag:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the current preservation priority for the specified tag.

> Use Background Assets instead.

## Declaration

```swift
func preservationPriority(forTag tag: String) -> Double
```

## Parameters

- `tag`: A string specifying the identifier for a group of related resources. An exception is thrown if `tag` does not exist in your app.

<a id="return-value"></a>

## Return Value

The preservation priority for the specified `tag`. Possible values are between `0.0` and `1.0`

## See Also

### Managing preservation priority for on-demand resources

- [setPreservationPriority(\_:forTags:)](setpreservationpriority%28__fortags_%29.md): Deprecated. A hint to the system of the relative order for purging tagged sets of resources in the bundle.

# preservationPriorityForTag: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the current preservation priority for the specified tag.

> Use Background Assets instead.

## Declaration

```objectivec
- (double) preservationPriorityForTag:(NSString *) tag;
```

## Parameters

- `tag`: A string specifying the identifier for a group of related resources. An exception is thrown if `tag` does not exist in your app.

<a id="return-value"></a>

## Return Value

The preservation priority for the specified `tag`. Possible values are between `0.0` and `1.0`

## See Also

### Managing preservation priority for on-demand resources

- [setPreservationPriority:forTags:](setpreservationpriority%28__fortags_%29.md): Deprecated. A hint to the system of the relative order for purging tagged sets of resources in the bundle.
