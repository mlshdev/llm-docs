> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlgazetteer/gazetteerwithcontentsofurl:error:](https://developer.apple.com/documentation/naturallanguage/nlgazetteer/gazetteerwithcontentsofurl:error:)

# gazetteerWithContentsOfURL:error:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a Natural Language gazetteer from a model created with the Create ML framework.

## Declaration

```objectivec
+ (instancetype) gazetteerWithContentsOfURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The location of the .`mlmodel` file that contains a gazetteer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an [NLGazetteer](../nlgazetteer.md) from an `.mlmodel` file saved by [MLGazetteer](../../createml/mlgazetteer.md) in the `Create ML` framework.

## See Also

### Creating a Gazetteer

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a Natural Language gazetteer from a model created with the Create ML framework.
- [initWithData:error:](init%28data_%29.md): Creates a gazetteer from a data instance.
- [initWithDictionary:language:error:](init%28dictionary_language_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary.
- [writeGazetteerForDictionary:language:toURL:error:](write%28__language_to_%29.md): Creates a gazetteer from a set of labels for terms represented by a dictionary and saves the gazetteer to a file.
