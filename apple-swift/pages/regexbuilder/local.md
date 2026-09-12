> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/local](https://developer.apple.com/documentation/regexbuilder/local)

# Local

**Framework:** RegexBuilder  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A regex component that represents an atomic group.

## Declaration

```swift
struct Local<Output>
```

<a id="overview"></a>

## Overview

An atomic group opens a local backtracking scope which, upon successful exit, discards any remaining backtracking points from within the scope.

## Topics

### Initializers

- [init(\_:)](local/init%28__%29-190tm.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-1pqmw.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-1z8ep.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-2682m.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-3bh2x.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-3igqu.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-3s7fi.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-53gbl.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-54x6o.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-5xekw.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-6dp02.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-75o5i.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-7an8x.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-7b0cb.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-7c8wv.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-7o3al.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-8bmi6.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-8hppy.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-8i5e6.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-8nf0w.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-8xd9f.md): Creates an atomic group with the given regex component.
- [init(\_:)](local/init%28__%29-anqj.md): Creates an atomic group with the given regex component.

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [Escapable](../swift/escapable.md)
- [RegexComponent](../swift/regexcomponent.md)

## See Also

### Quantifiers

- [One](one.md): A regex component that matches exactly one occurrence of its underlying component.
- [Optionally](optionally.md): A regex component that matches zero or one occurrences of its underlying component.
- [ZeroOrMore](zeroormore.md): A regex component that matches zero or more occurrences of its underlying component.
- [OneOrMore](oneormore.md): A regex component that matches one or more occurrences of its underlying component.
- [Repeat](repeat.md): A regex component that matches a selectable number of occurrences of its underlying component.
