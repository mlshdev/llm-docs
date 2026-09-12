> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/setmodels(_:fortagscheme:)](https://developer.apple.com/documentation/naturallanguage/nltagger/setmodels(_:fortagscheme:))

# setModels(\_:forTagScheme:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Assigns models for a tag scheme.

## Declaration

```swift
func setModels(_ models: [NLModel], forTagScheme tagScheme: NLTagScheme)
```

## Parameters

- `models`: Array of [NLModel](../nlmodel.md) objects to be used with this tagger.
- `tagScheme`: The tag scheme the models would be used with.

<a id="Discussion"></a>

## Discussion

An array of models is allowed for the case where multiple models need to be used. For example, when models were trained on specific languages.

## See Also

### Using models with a tagger

- [models(forTagScheme:)](models%28fortagscheme_%29.md): Returns the models that apply to the given tag scheme.

# setModels:forTagScheme: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Assigns models for a tag scheme.

## Declaration

```objectivec
- (void) setModels:(NSArray<NLModel *> *) models forTagScheme:(NLTagScheme) tagScheme;
```

## Parameters

- `models`: Array of [NLModel](../nlmodel.md) objects to be used with this tagger.
- `tagScheme`: The tag scheme the models would be used with.

<a id="Discussion"></a>

## Discussion

An array of models is allowed for the case where multiple models need to be used. For example, when models were trained on specific languages.

## See Also

### Using models with a tagger

- [modelsForTagScheme:](models%28fortagscheme_%29.md): Returns the models that apply to the given tag scheme.
