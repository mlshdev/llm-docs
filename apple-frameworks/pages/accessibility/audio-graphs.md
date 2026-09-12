> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/audio-graphs](https://developer.apple.com/documentation/accessibility/audio-graphs)

# Audio graphs (Swift)

**Framework:** Accessibility  
**Kind:** API Collection

Define an accessible representation of your chart for VoiceOver to generate an audio graph.

<a id="overview"></a>

## Overview

Charts and graphs help users quickly identify important features and trends in data. Use the audio graphs API to provide all the information that VoiceOver needs to construct an audible representation of the data in your charts and graphs, making the data accessible to people who are blind or have low vision.

![An illustration of an audio graph that shows data points modulating in pitch along the y-axis as a slider moves in time along the x-axis.](https://developer.apple.com/images/com.apple.Accessibility/audio_graphs-1@2x.png)

An *audio graph* turns the data in your chart into an audible representation by encoding the data on each axis as audio. Typically, the audio graph represents the x-axis as time, and the y-axis as pitch. For example, an audible representation of a scatter plot that shows a linear downward trend might be a series of individual tones descending in pitch over time. An audible representation of a stock chart might be a single continuous tone with a pitch that modulates up or down with the stock price (y-axis) as the audio plays over time (x-axis).

> **Related sessions from WWDC21**

> Session 10122: [Bring accessibility to charts in your app](https://developer.apple.com/wwdc21/10122)

## Topics

### Essentials

- [Representing chart data as an audio graph](representing-chart-data-as-an-audio-graph.md): Define accessible representations of your chart’s components for VoiceOver to construct an audible representation of the data.

### Chart representation

- [AXChart](axchart.md): A protocol that declares the minimum interface necessary for an accessibility element to act as a chart.
- [AXChartDescriptor](axchartdescriptor.md): An object that contains all the semantic information about an accessible chart.

### Axis representation

- [AXDataAxisDescriptor](axdataaxisdescriptor.md): The basic interface for a data axis in a chart.
- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md): An object that represents an axis of categorical data.
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md): An object that represents an axis of numerical data.

### Data representation

- [AXDataPoint](axdatapoint.md): An object that represents a single data point in a chart.
- [AXDataSeriesDescriptor](axdataseriesdescriptor.md): An object that represents a series of data points.

### Live audio graphs

- [AXLiveAudioGraph](axliveaudiograph.md): An object that represents an audio graph for a live-updating, continuous data series for VoiceOver.

## See Also

### Features

- [Customized accessibility content](customized-accessibility-content.md): Customize your apps to deliver accessibility information to your users in measured portions as they need it.
- [Hearing device support](hearing-device-support.md): Access information about paired hearing aid devices and streaming status.
- [AXNameFromColor(\_:)](axnamefromcolor%28__%29.md): Returns a localized description of the color to use in accessibility attributes.

# Audio graphs (Objective-C)

**Framework:** Accessibility  
**Kind:** API Collection

Define an accessible representation of your chart for VoiceOver to generate an audio graph.

<a id="overview"></a>

## Overview

Charts and graphs help users quickly identify important features and trends in data. Use the audio graphs API to provide all the information that VoiceOver needs to construct an audible representation of the data in your charts and graphs, making the data accessible to people who are blind or have low vision.

![An illustration of an audio graph that shows data points modulating in pitch along the y-axis as a slider moves in time along the x-axis.](https://developer.apple.com/images/com.apple.Accessibility/audio_graphs-1@2x.png)

An *audio graph* turns the data in your chart into an audible representation by encoding the data on each axis as audio. Typically, the audio graph represents the x-axis as time, and the y-axis as pitch. For example, an audible representation of a scatter plot that shows a linear downward trend might be a series of individual tones descending in pitch over time. An audible representation of a stock chart might be a single continuous tone with a pitch that modulates up or down with the stock price (y-axis) as the audio plays over time (x-axis).

> **Related sessions from WWDC21**

> Session 10122: [Bring accessibility to charts in your app](https://developer.apple.com/wwdc21/10122)

## Topics

### Essentials

- [Representing chart data as an audio graph](representing-chart-data-as-an-audio-graph.md): Define accessible representations of your chart’s components for VoiceOver to construct an audible representation of the data.

### Chart representation

- [AXChart](axchart.md): A protocol that declares the minimum interface necessary for an accessibility element to act as a chart.
- [AXChartDescriptor](axchartdescriptor.md): An object that contains all the semantic information about an accessible chart.

### Axis representation

- [AXDataAxisDescriptor](axdataaxisdescriptor.md): The basic interface for a data axis in a chart.
- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md): An object that represents an axis of categorical data.
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md): An object that represents an axis of numerical data.

### Data representation

- [AXDataPoint](axdatapoint.md): An object that represents a single data point in a chart.
- [AXDataSeriesDescriptor](axdataseriesdescriptor.md): An object that represents a series of data points.

### Live audio graphs

- [AXLiveAudioGraph](axliveaudiograph.md): An object that represents an audio graph for a live-updating, continuous data series for VoiceOver.

### Constants

- [AX_EXTERN](ax_extern.md)

## See Also

### Features

- [Customized accessibility content](customized-accessibility-content.md): Customize your apps to deliver accessibility information to your users in measured portions as they need it.
- [Hearing device support](hearing-device-support.md): Access information about paired hearing aid devices and streaming status.
- [AXNameFromColor](axnamefromcolor%28__%29.md): Returns a localized description of the color to use in accessibility attributes.
