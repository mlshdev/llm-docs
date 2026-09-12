> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeuegettypeid()](https://developer.apple.com/documentation/coremedia/cmsimplequeuegettypeid())

# CMSimpleQueueGetTypeID() (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier of sample buffer objects.

## Declaration

```swift
func CMSimpleQueueGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

`CFTypeID` of `CMSimpleQueue` objects.

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is a `CMSimpleQueue` object by comparing `CFGetTypeID(object)` with `CMSimpleQueueGetTypeID()`.

# CMSimpleQueueGetTypeID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier of sample buffer objects.

## Declaration

```objectivec
extern CFTypeID CMSimpleQueueGetTypeID();
```

<a id="return-value"></a>

## Return Value

`CFTypeID` of `CMSimpleQueue` objects.

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is a `CMSimpleQueue` object by comparing `CFGetTypeID(object)` with `CMSimpleQueueGetTypeID()`.
