> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/templatephrasecountgenerator/define(classname:values:)

# define(className:values:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Define a class of tokens to be used in template strings.

## Declaration

```swift
func define(className: String, values: [String])
```

## Parameters

- `className`: A string which will appear in template strings inside of angle brackets.
- `values`: The set of values which may be substituted into the template strings.
