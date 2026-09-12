> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/models(fortagscheme:)](https://developer.apple.com/documentation/naturallanguage/nltagger/models(fortagscheme:))

# models(forTagScheme:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the models that apply to the given tag scheme.

## Declaration

```swift
func models(forTagScheme tagScheme: NLTagScheme) -> [NLModel]
```

## Parameters

- `tagScheme`: The tag scheme to filter the list of models with.

<a id="return-value"></a>

## Return Value

The array of models that apply to the given tag scheme.

## See Also

### Using models with a tagger

- [setModels(\_:forTagScheme:)](setmodels%28__fortagscheme_%29.md): Assigns models for a tag scheme.

# modelsForTagScheme: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the models that apply to the given tag scheme.

## Declaration

```objectivec
- (NSArray<NLModel *> *) modelsForTagScheme:(NLTagScheme) tagScheme;
```

## Parameters

- `tagScheme`: The tag scheme to filter the list of models with.

<a id="return-value"></a>

## Return Value

The array of models that apply to the given tag scheme.

## See Also

### Using models with a tagger

- [setModels:forTagScheme:](setmodels%28__fortagscheme_%29.md): Assigns models for a tag scheme.
