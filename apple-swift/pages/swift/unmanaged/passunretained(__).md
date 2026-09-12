> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unmanaged/passunretained(_:)](https://developer.apple.com/documentation/swift/unmanaged/passunretained(_:))

# passUnretained(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an unmanaged reference without performing an unbalanced retain.

## Declaration

```swift
static func passUnretained(_ value: Instance) -> Unmanaged<Instance>
```

## Parameters

- `value`: A class instance.

<a id="return-value"></a>

## Return Value

An unmanaged reference to the object passed as `value`.

<a id="discussion"></a>

## Discussion

This is useful when passing a reference to an API which Swift does not know the ownership rules for, but you know that the API expects you to pass the object at +0.

```swift
CFArraySetValueAtIndex(.passUnretained(array), i,
                       .passUnretained(object))
```
