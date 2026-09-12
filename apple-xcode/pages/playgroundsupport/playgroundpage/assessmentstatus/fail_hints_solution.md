> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundpage/assessmentstatus/fail_hints_solution](https://developer.apple.com/documentation/playgroundsupport/playgroundpage/assessmentstatus/fail_hints_solution)

# PlaygroundPage.AssessmentStatus.fail(hints:solution:)

**Framework:** Playground Support  
**Kind:** Enumeration Case  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

An assessment that communicates that a learner hasn't successfully completed a task.

## Declaration

```swift
case fail(hints: [String], solution: String?)
```

## Parameters

- `hints`: A list of hints that might help a learner pass the assessment.
- `solution`: An explicit solution to the assessment that a learner can use to get unstuck.

<a id="discussion"></a>

## Discussion

If no solution is provided, there must be at least one string in the `hints` array.

The strings for the solution and for hints can contain markup. For more information on markup, see [Markup Formatting Reference](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_markup_formatting_ref/index.html#//apple_ref/doc/uid/TP40016497). The example below sets one hint for the page. The markup in the hint string displays the word “for” in code voice.

<a id="3034538"></a>

**Listing 1**

```swift
PlaygroundPage.current.assessmentStatus = .fail(hints: ["Try using a `for` loop"], solution: nil)
```
