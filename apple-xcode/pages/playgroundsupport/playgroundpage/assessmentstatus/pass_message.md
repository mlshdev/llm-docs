> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundpage/assessmentstatus/pass_message](https://developer.apple.com/documentation/playgroundsupport/playgroundpage/assessmentstatus/pass_message)

# PlaygroundPage.AssessmentStatus.pass(message:)

**Framework:** Playground Support  
**Kind:** Enumeration Case  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

An assessment that communicates that a learner has successfully completed a task.

## Declaration

```swift
case pass(message: String?)
```

## Parameters

- `message`: A message you use to affirm a learner's succes.

<a id="discussion"></a>

## Discussion

The `message` associated value can contain markup. For more information on markup, see [Markup Formatting Reference](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_markup_formatting_ref/index.html#//apple_ref/doc/uid/TP40016497). The example below shows a popover with the message “**Great** job!”

<a id="3034539"></a>

**Listing 1**

```swift
PlaygroundPage.current.assessmentStatus = .pass(message: "**Great** job!")
```
