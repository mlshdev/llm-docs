> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/match](https://developer.apple.com/documentation/swift/regex/match)

# Regex.Match

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The result of matching a regular expression against a string.

## Declaration

```swift
@dynamicMemberLookup struct Match
```

<a id="overview"></a>

## Overview

A `Match` forwards API to the `Output` generic parameter, providing direct access to captures.

## Topics

### Initializers

- [init(\_:)](match/init%28__%29.md): Conforms when `Output` is `AnyRegexOutput`. Creates a regular expression match with a dynamic capture list from the given match.

### Instance Properties

- [output](match/output.md): The output produced from the match operation.
- [range](match/range.md): The range of the overall match.

### Subscripts

- [subscript(\_:)](match/subscript%28__%29-9bzv4.md): Conforms when `Output` is `AnyRegexOutput`. Accesses the capture with the specified name, if a capture with that name exists.
- [subscript(\_:)](match/subscript%28__%29-vbin.md): Accesses this match’s capture by the given reference.
- [subscript(dynamicMember:)](match/subscript%28dynamicmember_%29.md): Accesses a capture by its name or number.
