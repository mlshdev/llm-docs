> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfequal(_:_:)](https://developer.apple.com/documentation/corefoundation/cfequal(_:_:))

# CFEqual(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether two Core Foundation objects are considered equal.

## Declaration

```swift
func CFEqual(_ cf1: CFTypeRef!, _ cf2: CFTypeRef!) -> Bool
```

## Parameters

- `cf1`: A CFType object to compare to `cf2`.
- `cf2`: A CFType object to compare to `cf1`.

<a id="return-value"></a>

## Return Value

`true` if `cf1` and `cf2` are of the same type and considered equal, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Equality is something specific to each Core Foundation opaque type. For example, two CFNumber objects are equal if the numeric values they represent are equal. Two CFString objects are equal if they represent identical sequences of characters, regardless of encoding.

# CFEqual (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether two Core Foundation objects are considered equal.

## Declaration

```objectivec
extern Boolean CFEqual(CFTypeRef cf1, CFTypeRef cf2);
```

## Parameters

- `cf1`: A CFType object to compare to `cf2`.
- `cf2`: A CFType object to compare to `cf1`.

<a id="return-value"></a>

## Return Value

`true` if `cf1` and `cf2` are of the same type and considered equal, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Equality is something specific to each Core Foundation opaque type. For example, two CFNumber objects are equal if the numeric values they represent are equal. Two CFString objects are equal if they represent identical sequences of characters, regardless of encoding.
