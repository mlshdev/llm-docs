> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfhash(_:)](https://developer.apple.com/documentation/corefoundation/cfhash(_:))

# CFHash(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a code that can be used to identify an object in a hashing structure.

## Declaration

```swift
func CFHash(_ cf: CFTypeRef!) -> CFHashCode
```

## Parameters

- `cf`: A CFType object to examine.

<a id="return-value"></a>

## Return Value

An integer of type [CFHashCode](cfhashcode.md) that represents a hashing value for `cf`.

<a id="Discussion"></a>

## Discussion

Two objects that are equal (as determined by the [CFEqual(\_:\_:)](cfequal%28____%29.md) function) have the same hashing value. However, the converse is not true: two objects with the same hashing value might not be equal. That is, hashing values are not necessarily unique.

The hashing value for an object might change from release to release or from platform to platform.

# CFHash (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a code that can be used to identify an object in a hashing structure.

## Declaration

```objectivec
extern CFHashCode CFHash(CFTypeRef cf);
```

## Parameters

- `cf`: A CFType object to examine.

<a id="return-value"></a>

## Return Value

An integer of type [CFHashCode](cfhashcode.md) that represents a hashing value for `cf`.

<a id="Discussion"></a>

## Discussion

Two objects that are equal (as determined by the [CFEqual](cfequal%28____%29.md) function) have the same hashing value. However, the converse is not true: two objects with the same hashing value might not be equal. That is, hashing values are not necessarily unique.

The hashing value for an object might change from release to release or from platform to platform.
