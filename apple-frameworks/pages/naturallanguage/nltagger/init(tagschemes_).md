> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/init(tagschemes:)](https://developer.apple.com/documentation/naturallanguage/nltagger/init(tagschemes:))

# init(tagSchemes:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a linguistic tagger instance using the specified tag schemes and options.

## Declaration

```swift
init(tagSchemes: [NLTagScheme])
```

## Parameters

- `tagSchemes`: An array of tag schemes to be used. See [NLTagScheme](../nltagscheme.md) for the possible values.

<a id="Discussion"></a>

## Discussion

Pass any tag schemes to tagSchemes that you intend to use with the methods described in Enumerating linguistic tags and Getting linguistic tags in [NLTagger](../nltagger.md).

> **Tip**

>  Avoid specifying tag schemes that you won’t use to ensure optimal performance.

## See Also

### Creating a tagger

- [string](string.md): The string being analyzed by the linguistic tagger.

# initWithTagSchemes: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a linguistic tagger instance using the specified tag schemes and options.

## Declaration

```objectivec
- (instancetype) initWithTagSchemes:(NSArray<NSString *> *) tagSchemes;
```

## Parameters

- `tagSchemes`: An array of tag schemes to be used. See [NLTagScheme](../nltagscheme.md) for the possible values.

<a id="Discussion"></a>

## Discussion

Pass any tag schemes to tagSchemes that you intend to use with the methods described in Enumerating linguistic tags and Getting linguistic tags in [NLTagger](../nltagger.md).

> **Tip**

>  Avoid specifying tag schemes that you won’t use to ensure optimal performance.

## See Also

### Creating a tagger

- [string](string.md): The string being analyzed by the linguistic tagger.
