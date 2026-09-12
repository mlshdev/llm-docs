> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel](https://developer.apple.com/documentation/naturallanguage/nlmodel)

# NLModel (Swift)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A custom model trained to classify or tag natural language text.

## Declaration

```swift
class NLModel
```

<a id="overview"></a>

## Overview

With [Natural Language](../naturallanguage.md), you can create text classifier ([MLTextClassifier](../createml/mltextclassifier.md)) or word tagger ([MLWordTagger](../createml/mlwordtagger.md)) models. Use [NLModel](nlmodel.md) to integrate those models into your app. This integration ensures that your tokenization and tagger configurations are identical when you train your model and use it in your app.

If you create a text classifier as described in doc:creating-a-text-classifier-model, you can integrate that model into your app and use it to make predictions like this:

```swift
let text = "I am very happy."

do {
    let mlModel = try SentimentClassifier(configuration: MLModelConfiguration()).model
        
    let customModel = try NLModel(mlModel: mlModel)
    
    // Use the text classifier model to get the most likely label.
    if let label = customModel.predictedLabel(for: text) {
        print("Most likely label: \(label)")
    }
    
    // Get multiple possible labels with their associated confidence scores.
    let labelHypotheses = customModel.predictedLabelHypotheses(for: text, maximumCount: 3)
    print("Label confidence scores: \(labelHypotheses)")
    
} catch {
    print(error)
}
```

If you create a custom word tagger as described in doc:creating-a-word-tagger-model, you can integrate that model into your app and generate tags for new text input like this:

```swift
let text = "The iPad is my favorite Apple product."

do {
    let mlModel = try AppleTagger(configuration: MLModelConfiguration()).model
        
    let customModel = try NLModel(mlModel: mlModel)
    let customTagScheme = NLTagScheme("Apple")
    
    let tagger = NLTagger(tagSchemes: [.nameType, customTagScheme])
    tagger.string = text
    tagger.setModels([customModel], forTagScheme: customTagScheme)
    
    tagger.enumerateTags(in: text.startIndex..<text.endIndex, unit: .word, 
                         scheme: customTagScheme, options: .omitWhitespace) { tag, tokenRange  in
        if let tag = tag {
            print("\(text[tokenRange]): \(tag.rawValue)")
        }
        return true
    }
} catch {
    print(error)
}
```

## Topics

### Creating a model

- [init(mlModel:)](nlmodel/init%28mlmodel_%29-9tpjr.md): Creates a new natural language model based on the given Core ML model instance.
- [init(contentsOf:)](nlmodel/init%28contentsof_%29.md): Creates a new natural language model based on a compiled Core ML model at the given URL.

### Making predictions

- [predictedLabel(for:)](nlmodel/predictedlabel%28for_%29.md): Predicts a label for the given input string.
- [predictedLabels(forTokens:)](nlmodel/predictedlabels%28fortokens_%29.md): Predicts a label for each string in the given array.
- [predictedLabelHypotheses(for:maximumCount:)](nlmodel/predictedlabelhypotheses%28for_maximumcount_%29.md): Predicts multiple possible labels for the given input string.
- [predictedLabelHypotheses(forTokens:maximumCount:)](nlmodel/predictedlabelhypotheses%28fortokens_maximumcount_%29.md): Predicts multiple possible labels for each string in the given array.

### Inspecting a model

- [configuration](nlmodel/configuration.md): A configuration describing the natural language model.
- [NLModelConfiguration](nlmodelconfiguration.md): The configuration parameters of a natural language model.

### Related Documentation

- [MLTextClassifier](../createml/mltextclassifier.md): A model you train to classify natural language text.
- [MLWordTagger](../createml/mlwordtagger.md): A word-tagging model you train to classify natural language text at the word level.

### Initializers

- [init(MLModel:)](nlmodel/init%28mlmodel_%29-4o6g8.md)
- [init(contentsOfURL:)](nlmodel/init%28contentsofurl_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Natural language models

- [Creating a text classifier model](../createml/creating-a-text-classifier-model.md): Train a machine learning model to classify natural language text.
- [Creating a word tagger model](../createml/creating-a-word-tagger-model.md): Train a machine learning model to tag individual words in natural language text.

# NLModel (Objective-C)

**Framework:** Natural Language  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A custom model trained to classify or tag natural language text.

## Declaration

```objectivec
@interface NLModel : NSObject
```

<a id="overview"></a>

## Overview

With [Natural Language](../naturallanguage.md), you can create text classifier ([MLTextClassifier](../createml/mltextclassifier.md)) or word tagger ([MLWordTagger](../createml/mlwordtagger.md)) models. Use [NLModel](nlmodel.md) to integrate those models into your app. This integration ensures that your tokenization and tagger configurations are identical when you train your model and use it in your app.

If you create a text classifier as described in doc:creating-a-text-classifier-model, you can integrate that model into your app and use it to make predictions like this:

```swift
let text = "I am very happy."

do {
    let mlModel = try SentimentClassifier(configuration: MLModelConfiguration()).model
        
    let customModel = try NLModel(mlModel: mlModel)
    
    // Use the text classifier model to get the most likely label.
    if let label = customModel.predictedLabel(for: text) {
        print("Most likely label: \(label)")
    }
    
    // Get multiple possible labels with their associated confidence scores.
    let labelHypotheses = customModel.predictedLabelHypotheses(for: text, maximumCount: 3)
    print("Label confidence scores: \(labelHypotheses)")
    
} catch {
    print(error)
}
```

If you create a custom word tagger as described in doc:creating-a-word-tagger-model, you can integrate that model into your app and generate tags for new text input like this:

```swift
let text = "The iPad is my favorite Apple product."

do {
    let mlModel = try AppleTagger(configuration: MLModelConfiguration()).model
        
    let customModel = try NLModel(mlModel: mlModel)
    let customTagScheme = NLTagScheme("Apple")
    
    let tagger = NLTagger(tagSchemes: [.nameType, customTagScheme])
    tagger.string = text
    tagger.setModels([customModel], forTagScheme: customTagScheme)
    
    tagger.enumerateTags(in: text.startIndex..<text.endIndex, unit: .word, 
                         scheme: customTagScheme, options: .omitWhitespace) { tag, tokenRange  in
        if let tag = tag {
            print("\(text[tokenRange]): \(tag.rawValue)")
        }
        return true
    }
} catch {
    print(error)
}
```

## Topics

### Creating a model

- [modelWithMLModel:error:](nlmodel/init%28mlmodel_%29-9tpjr.md): Creates a new natural language model based on the given Core ML model instance.
- [modelWithContentsOfURL:error:](nlmodel/init%28contentsof_%29.md): Creates a new natural language model based on a compiled Core ML model at the given URL.

### Making predictions

- [predictedLabelForString:](nlmodel/predictedlabel%28for_%29.md): Predicts a label for the given input string.
- [predictedLabelsForTokens:](nlmodel/predictedlabels%28fortokens_%29.md): Predicts a label for each string in the given array.
- [predictedLabelHypothesesForString:maximumCount:](nlmodel/predictedlabelhypothesesforstring_maximumcount_.md): Predicts multiple possible labels for the given input string.
- [predictedLabelHypothesesForTokens:maximumCount:](nlmodel/predictedlabelhypothesesfortokens_maximumcount_.md): Predicts multiple possible labels for each string in the given array.

### Inspecting a model

- [configuration](nlmodel/configuration.md): A configuration describing the natural language model.
- [NLModelConfiguration](nlmodelconfiguration.md): The configuration parameters of a natural language model.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
