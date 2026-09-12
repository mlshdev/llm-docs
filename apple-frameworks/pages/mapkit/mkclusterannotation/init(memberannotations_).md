> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkclusterannotation/init(memberannotations:)](https://developer.apple.com/documentation/mapkit/mkclusterannotation/init(memberannotations:))

# init(memberAnnotations:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a cluster annotation with the specified individual annotations.

## Declaration

```swift
init(memberAnnotations: [any MKAnnotation])
```

## Parameters

- `memberAnnotations`: The annotations to group together as a single entity.

<a id="return-value"></a>

## Return Value

An initialized [MKClusterAnnotation](../mkclusterannotation.md) object or `nil` if the object could not be created.

# initWithMemberAnnotations: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a cluster annotation with the specified individual annotations.

## Declaration

```objectivec
- (instancetype) initWithMemberAnnotations:(NSArray<id<MKAnnotation>> *) memberAnnotations;
```

## Parameters

- `memberAnnotations`: The annotations to group together as a single entity.

<a id="return-value"></a>

## Return Value

An initialized [MKClusterAnnotation](../mkclusterannotation.md) object or `nil` if the object could not be created.
