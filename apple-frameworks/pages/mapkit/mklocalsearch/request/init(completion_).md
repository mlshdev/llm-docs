> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/request/init(completion:)](https://developer.apple.com/documentation/mapkit/mklocalsearch/request/init(completion:))

# init(completion:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a search request based on the specified search completion data.

## Declaration

```swift
init(completion: MKLocalSearchCompletion)
```

## Parameters

- `completion`: A search completion object that MapKit obtains from an [MKLocalSearchCompleter](../../mklocalsearchcompleter.md) object. The search request uses the provided object to set the value of the [naturalLanguageQuery](naturallanguagequery.md) property.

<a id="return-value"></a>

## Return Value

An initialized search request.

<a id="Discussion"></a>

## Discussion

Use this method when initializing your object from [MKLocalSearchCompleter](../../mklocalsearchcompleter.md) objects. You don’t need to use this method if you intend to provide the search string and region information yourself.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a local search request

- [init()](init%28%29.md): Creates a local search request.

# initWithCompletion: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a search request based on the specified search completion data.

## Declaration

```objectivec
- (instancetype) initWithCompletion:(MKLocalSearchCompletion *) completion;
```

## Parameters

- `completion`: A search completion object that MapKit obtains from an [MKLocalSearchCompleter](../../mklocalsearchcompleter.md) object. The search request uses the provided object to set the value of the [naturalLanguageQuery](naturallanguagequery.md) property.

<a id="return-value"></a>

## Return Value

An initialized search request.

<a id="Discussion"></a>

## Discussion

Use this method when initializing your object from [MKLocalSearchCompleter](../../mklocalsearchcompleter.md) objects. You don’t need to use this method if you intend to provide the search string and region information yourself.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a local search request

- [init](init%28%29.md): Creates a local search request.
