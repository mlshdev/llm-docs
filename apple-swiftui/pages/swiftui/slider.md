> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slider](https://developer.apple.com/documentation/swiftui/slider)

# Slider

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A control for selecting a value from a bounded linear range of values.

## Declaration

```swift
nonisolated struct Slider<Label, ValueLabel> where Label : View, ValueLabel : View
```

## Mentioned In

- [Populating SwiftUI menus with adaptive controls](populating-swiftui-menus-with-adaptive-controls.md)

<a id="overview"></a>

## Overview

A slider consists of a “thumb” image that the user moves between two extremes of a linear “track”. The ends of the track represent the minimum and maximum possible values. As the user moves the thumb, the slider updates its bound value.

The following example shows a slider bound to the value `speed`. As the slider updates this value, a bound [Text](text.md) view shows the value updating. The `onEditingChanged` closure passed to the slider receives callbacks when the user drags the slider. The example uses this to change the color of the value text.

```swift
@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
    VStack {
        Slider(
            value: $speed,
            in: 0...100,
            onEditingChanged: { editing in
                isEditing = editing
            }
        )
        Text("\(speed)")
            .foregroundColor(isEditing ? .red : .blue)
    }
}
```

![An unlabeled slider, with its thumb about one third of the way from the](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Slider-simple@2x.png)

You can also use a `step` parameter to provide incremental steps along the path of the slider. For example, if you have a slider with a range of `0` to `100`, and you set the `step` value to `5`, the slider’s increments would be `0`, `5`, `10`, and so on. The following example shows this approach, and also adds optional minimum and maximum value labels.

```swift
@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
    Slider(
        value: $speed,
        in: 0...100,
        step: 5
    ) {
        Text("Speed")
    } minimumValueLabel: {
        Text("0")
    } maximumValueLabel: {
        Text("100")
    } onEditingChanged: { editing in
        isEditing = editing
    }
    Text("\(speed)")
        .foregroundColor(isEditing ? .red : .blue)
}
```

![A slider with labels show minimum and maximum values of 0 and 100,](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Slider-withStepAndLabels@2x.png)

The slider also uses the `step` to increase or decrease the value when a VoiceOver user adjusts the slider with voice commands.

## Topics

### Creating a slider

- [init(value:in:onEditingChanged:)](slider/init%28value_in_oneditingchanged_%29.md): Conforms when `Label` is `EmptyView` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range.
- [init(value:in:step:onEditingChanged:)](slider/init%28value_in_step_oneditingchanged_%29.md): Conforms when `Label` is `EmptyView` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range, subject to a step increment.

### Creating a slider with labels

- [init(value:in:label:onEditingChanged:)](slider/init%28value_in_label_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range, which displays the provided label.
- [init(value:in:step:label:onEditingChanged:)](slider/init%28value_in_step_label_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range, subject to a step increment, which displays the provided label.
- [init(value:in:label:minimumValueLabel:maximumValueLabel:onEditingChanged:)](slider/init%28value_in_label_minimumvaluelabel_maximumvaluelabel_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, which displays the provided labels.
- [init(value:in:step:label:minimumValueLabel:maximumValueLabel:onEditingChanged:)](slider/init%28value_in_step_label_minimumvaluelabel_maximumvaluelabel_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels.

### Adding ticks to a slider

- [SliderTick](slidertick.md): A representation of a tick in a slider, with associated value and optional label.
- [SliderTickBuilder](slidertickbuilder.md): A result builder that constructs `SliderTick`s for use when creating a `Slider`.
- [SliderTickContentForEach](slidertickcontentforeach.md): A type of slider content that creates content by iterating over a collection.
- [TupleSliderTickContent](tupleslidertickcontent.md): Slider content created from a Swift tuple of slider content.
- [SliderTickContent](slidertickcontent.md): A type that provides content for a `SliderTickBuilder`.

### Deprecated initializers

- [init(value:in:onEditingChanged:label:)](slider/init%28value_in_oneditingchanged_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range, which displays the provided label.
- [init(value:in:step:onEditingChanged:label:)](slider/init%28value_in_step_oneditingchanged_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range, subject to a step increment, which displays the provided label.
- [init(value:in:onEditingChanged:minimumValueLabel:maximumValueLabel:label:)](slider/init%28value_in_oneditingchanged_minimumvaluelabel_maximumvaluelabel_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, which displays the provided labels.
- [init(value:in:step:onEditingChanged:minimumValueLabel:maximumValueLabel:label:)](slider/init%28value_in_step_oneditingchanged_minimumvaluelabel_maximumvaluelabel_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels.

### Initializers

- [init(value:in:neutralValue:enabledBounds:label:currentValueLabel:minimumValueLabel:maximumValueLabel:onEditingChanged:)](slider/init%28value_in_neutralvalue_enabledbounds_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, which displays the provided labels.
- [init(value:in:neutralValue:enabledBounds:label:currentValueLabel:minimumValueLabel:maximumValueLabel:ticks:onEditingChanged:)](slider/init%28value_in_neutralvalue_enabledbounds_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_ticks_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, which displays the provided labels and customized ticks.
- [init(value:in:step:neutralValue:enabledBounds:label:currentValueLabel:minimumValueLabel:maximumValueLabel:tick:onEditingChanged:)](slider/init%28value_in_step_neutralvalue_enabledbounds_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_tick_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels and customizable ticks.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Getting numeric inputs

- [Stepper](stepper.md): A control that performs increment and decrement actions.
- [Toggle](toggle.md): A control that toggles between on and off states.
- [toggleStyle(\_:)](view/togglestyle%28__%29.md): Sets the style for toggles in a view hierarchy.
