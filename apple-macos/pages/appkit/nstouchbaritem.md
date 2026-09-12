> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem](https://developer.apple.com/documentation/appkit/nstouchbaritem)

# NSTouchBarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A UI control shown in the Touch Bar on supported models of MacBook Pro.

## Declaration

```swift
@MainActor class NSTouchBarItem
```

<a id="overview"></a>

## Overview

An instance of the [NSTouchBarItem](nstouchbaritem.md) class is called an *item*. It appears to the user on the Touch Bar, typically along with other items, within the (invisible) bounds of the view for an [NSTouchBar](nstouchbar.md) object, called a *bar*.

You use an item by adding it or its identifier to one or another of a bar’s arrays, depending on your app’s architecture and on the user customization you want to support. Because of the close interaction between bars and items, be sure you have read the overview for the [NSTouchBar](nstouchbar.md) class before continuing here to learn about items.

AppKit provides a rich set of subclasses of [NSTouchBarItem](nstouchbaritem.md), each of which is described in the corresponding class reference document:

- An [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md) object (a *candidate-list item*), along with its delegate, provides a list of textual suggestions for the current text view
- An [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md) object (a *color picker item*) provides a system-defined color picker
- An [NSCustomTouchBarItem](nscustomtouchbaritem.md) object (a *custom item*) contains a responder of your choice, such as a view, a button, or a scrubber (an instance of the [NSScrubber](nsscrubber.md) class)
- An [NSGroupTouchBarItem](nsgrouptouchbaritem.md) object (a *group item*) provides a bar to contain other items
- An [NSPopoverTouchBarItem](nspopovertouchbaritem.md) object (a *popover item*) provides a two-state control that, when touched or pressed, expands into its second state, showing the contents of a bar it owns
- An [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md) object (a *sharing service picker item*), along with its delegate, provides a list of objects eligible for sharing
- An [NSSliderTouchBarItem](nsslidertouchbaritem.md) object (a *slider item*) provides a slider control for choosing a value in a range

The two most commonly-used item classes are [NSCustomTouchBarItem](nscustomtouchbaritem.md) and [NSPopoverTouchBarItem](nspopovertouchbaritem.md).

Refer to the following sample code projects which demonstrate how to use [NSTouchBarItem](nstouchbaritem.md) and related classes:

- [Creating and Customizing the Touch Bar](creating-and-customizing-the-touch-bar.md)
- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md)

<a id="Custom-items"></a>

### Custom items

You typically use a *custom item* (an instance of the [NSCustomTouchBarItem](nscustomtouchbaritem.md) class) to hold a view. For example, to place a button in the Touch Bar, proceed as follows:

1. Use an [NSButton](nsbutton.md) convenience initializer such as [init(title:image:target:action:)](nsbutton/init%28title_image_target_action_%29.md) to create and configure the button.
2. Set the [view](nstouchbaritem/view.md) property for a custom item to point to the new button.

> **Note**

>  When you create custom items, it’s important to use convenience initializers, available starting in macOS 10.12, for the [NSButton](nsbutton.md), [NSSegmentedControl](nssegmentedcontrol.md), and [NSSlider](nsslider.md) classes. These initializers take care of sizing their controls correctly for the Touch Bar, and they configure appearance appropriately for the Touch Bar. If you don’t use the convenience initializers, it’s your app’s responsibility to ensure correct sizing and appearance.

<a id="Popover-items"></a>

### Popover items

A *popover item* (an instance of the [NSPopoverTouchBarItem](nspopovertouchbaritem.md) class) — the second commonly-used type — lets you provide a new bar (an [NSTouchBar](nstouchbar.md) object) when a user taps, or presses-and-holds, on the collapsed representation of the popover item.

In its expanded state, a popover appears as an overlay above other items in the Touch Bar.

To show a bar when a user taps a popover item, specify a bar in the item’s [popoverTouchBar](nspopovertouchbaritem/popovertouchbar.md) property. Enable press-and-hold by specifying a bar in the [pressAndHoldTouchBar](nspopovertouchbaritem/pressandholdtouchbar.md) property. The press-and-hold feature is suitable only for a simple popover, such as one that contains a single segmented control (an instance of the [NSSegmentedControl](nssegmentedcontrol.md) class) or slider (an instance of the [NSSliderTouchBarItem](nsslidertouchbaritem.md) class).

> **Note**

>  If your popover bar requires significant user interaction and contains many items or many scroll views, don’t enable press-and-hold; doing so can result in an awkward user experience.

The system automatically shows a chevron in the popover item under the following conditions: You specify the same [NSTouchBar](nstouchbar.md) object for both [pressAndHoldTouchBar](nspopovertouchbaritem/pressandholdtouchbar.md) and [popoverTouchBar](nspopovertouchbaritem/popovertouchbar.md) properties, *and* you use the default view for the popover item’s [collapsedRepresentation](nspopovertouchbaritem/collapsedrepresentation.md) property.

If you provide a popover item that contains a scrubber (an [NSScrubber](nsscrubber.md) instance), you’ll likely want to dismiss both the scrubber and the popover after the user makes their selection in the scrubber. A good approach to achieve this user interaction is to subclass [NSPopoverTouchBarItem](nspopovertouchbaritem.md), employing your instance of the subclass as the scrubber’s delegate. You can then configure the delegate object, within its [didFinishInteracting(with:)](nsscrubberdelegate/didfinishinteracting%28with_%29.md) method, to call the popover’s [dismissPopover(\_:)](nspopovertouchbaritem/dismisspopover%28__%29.md) method.

If you place a segmented control in a bar for a popover item, take care *not* to use [NSSegmentedControl.SwitchTracking.momentary](nssegmentedcontrol/switchtracking/momentary.md) option of the [NSSegmentedControl.SwitchTracking](nssegmentedcontrol/switchtracking.md) enumeration because doing so interferes with the user’s operation of the control.

<a id="Other-common-item-types"></a>

### Other common item types

To provide a *slider item*, always use the [NSSliderTouchBarItem](nsslidertouchbaritem.md) class, which employs a standard slider but is optimized for user interaction with the Touch Bar. (That is, don’t instead add an [NSSlider](nsslider.md) object directly to a custom item.)

A *group item* (an instance of the [NSGroupTouchBarItem](nsgrouptouchbaritem.md) class) is a container that provides a bar, in its [groupTouchBar](nsgrouptouchbaritem/grouptouchbar.md) property, with its own array of items. You can enable customization for the items in a group’s contained bar, in the same way you would for items directly within a top-level bar. Using a group item lets you provide different user customization rules for different parts of the Touch Bar. Using a group item also lets you enable centering of the group within the Touch Bar.

A *spacing item* lets you add custom spacing between items in a bar. Specify a spacing item for a bar by assigning the [fixedSpaceSmall](nstouchbaritem/identifier-swift.struct/fixedspacesmall.md), [fixedSpaceLarge](nstouchbaritem/identifier-swift.struct/fixedspacelarge.md), or [flexibleSpace](nstouchbaritem/identifier-swift.struct/flexiblespace.md) identifier to an item, and adding that item to the bar’s items array. The system automatically instantiates and configures spacing items based on the identifiers you specify.

<a id="Configuration"></a>

### Configuration

You must configure each item with a unique identifier, and can optionally assign a visibility priority or tag it as a principal item.

**NSTouchBarItem identification.** You must provide a unique identifier for each item in the bar, apart from spacing items. Specify an identifier, of type [NSTouchBarItem.Identifier](nstouchbaritem/identifier-swift.struct.md) (called an *item identifier*), for each item when you initialize it. The item identifier serves as a persistable weak reference to the item. The system uses item identifiers to populate bars and to track and record changes for user customization.

**NSTouchBarItem priority for visibility.** If the system is showing a bar in the Touch Bar, but horizontal space is constrained and the bar defines more items than will fit, the system hides some of the items. You influence this hide/show behavior by setting a value for the [visibilityPriority](nstouchbaritem/visibilitypriority.md) property of each item.

Lower-visibility-priority items get hidden by the system, as needed, before higher-visibility-priority items do.

To set visibility priority, use the constants in the [NSTouchBarItem.Priority](nstouchbaritem/priority.md) enumeration, or assign an integer value. The value `0` indicates [normal](nstouchbaritem/priority/normal.md) visibility priority. Visibility priority increases with increasing numerical value. The [low](nstouchbaritem/priority/low.md) constant provides a value of `-1000`; the [high](nstouchbaritem/priority/high.md) constant, a value `+1000`. You can use integers outside of this range if you need to.

The system hides or shows groups of identical-priority items (defined within a single bar) together. The one exception to this rule is for items whose visibility priority is [normal](nstouchbaritem/priority/normal.md); these items get hidden one-by-one, with the normal-priority item farthest to the right getting hidden first. If horizontal space later increases in the Touch Bar, and hidden, normal-priority items become eligible for display, the system first shows the most recently-hidden of those items.

**Principal Items.** Within a bar, you can optionally specify an item as having special significance by employing the [principalItemIdentifier](nstouchbar/principalitemidentifier.md) property. The system attempts to center a principal item within the Touch Bar. If you want a group of items to appear centered in the Touch Bar, designate the group item (of type [NSTouchBarItem](nstouchbaritem.md)) as the principal item.

If more than one bar in the responder chain is eligible to be visible in the Touch Bar, and more than one of those has a principal item, the system determines which one to center in the Touch Bar.

<a id="Fonts-images-and-colors"></a>

#### Fonts, images, and colors

When using a button in a custom item, don’t attempt to set the button title’s font. In the Touch Bar, the system specifies fonts for standard controls.

If you need to specify a font, such as for custom drawing, use the [systemFont(ofSize:)](nsfont/systemfont%28ofsize_%29.md) class method (or related methods) of the [NSFont](nsfont.md) class. Use a font size of `0` to automatically obtain appropriate sizing for the Touch Bar.

If you use an image in a button or other control in the Touch Bar, take care to employ a template image. Template images in the Touch Bar respond automatically to system white-point changes, and automatically react to user interactions. The overview in this document lists the built-in Touch Bar template images.

To use your own image assets, use Retina-resolution images, designated as `@2x` in your asset catalog and with a maximum height of 30 points (corresponding to 60 pixels).

To set colors on objects within an [NSTouchBarItem](nstouchbaritem.md) object, use AppKit named colors and use a bezel color property (available starting in macOS 10.12.1). Named colors appear correctly in the Touch Bar, support appearance vibrancy, and respond to system white-point changes. In a button or a segmented control, employ the bezel color property to ensure appropriate appearance in the Touch Bar.

To set the background color on a button within a custom item, use code like this:

```swift
myButton.bezelColor = NSColor.controlColor 
```

To set color on text and glyphs in the Touch Bar, use the following colors from the [NSColor](nscolor.md) class:

- [labelColor](nscolor/labelcolor.md)
- [secondaryLabelColor](nscolor/secondarylabelcolor.md)
- [tertiaryLabelColor](nscolor/tertiarylabelcolor.md)
- [quaternaryLabelColor](nscolor/quaternarylabelcolor.md)

The system automatically changes the relative brightness and the white-point of these colors, depending on the ambient light, and depending on other factors such as keyboard backlight level. Always use these colors, or colors that dynamically derive from these colors, for control backgrounds, text, icons, and glyphs in the Touch Bar.

<a id="Handling-touch-events"></a>

#### Handling touch events

The easiest way to handle touch events in an item is to use AppKit controls, such as by adding a button, a segmented control, or a scrubber to the item. Standard AppKit controls convey touch events to your specified targets automatically, so use standard controls whenever possible in your app.

If standard controls are insufficient, you can create composite views with a combination of standard controls, custom views, and gesture recognizers that you manually add to those custom views.

If you require the lowest-level of control for touch event processing, you can use the [NSTouch](nstouch.md) class directly. You might go this route, for example, to provide good user feedback in the case of a control placed within a scroll view.Direct use of touch methods allows fine-grained control over interaction. You can, for example, highlight a control immediately upon a user touching it, and then remove the highlight if the user then, without lifting the finger, performs a scroll gesture.

If using the [NSTouch](nstouch.md) class directly, be sure to implement the [touchesCancelled(with:)](nsgesturerecognizer/touchescancelled%28with_%29.md) responder method, because users can perform touch interactions that result in canceled touches.

## Topics

### Creating a bar item

- [init(identifier:)](nstouchbaritem/init%28identifier_%29.md): Creates a new item with the specified identifier.
- [NSTouchBarItem.Identifier](nstouchbaritem/identifier-swift.struct.md): An identifier for an item in the Touch Bar.
- [init(coder:)](nstouchbaritem/init%28coder_%29.md): Initializes and returns a new item from a storyboard or nib file.

### Identifying a bar item

- [identifier](nstouchbaritem/identifier-swift.property.md): The identifier for this item.
- [NSTouchBarItem.Identifier](nstouchbaritem/identifier-swift.struct.md): An identifier for an item in the Touch Bar.

### Managing item visibility

- [visibilityPriority](nstouchbaritem/visibilitypriority.md): Determines which items are shown in a bar when space is limited.
- [NSTouchBarItem.Priority](nstouchbaritem/priority.md): Priorities for the visibility of a Touch Bar item.
- [isVisible](nstouchbaritem/isvisible.md): A Boolean value that reflects whether or not the item is visible.

### Configuring bar customization

- [customizationLabel](nstouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

### Subclassing bar items

- [viewController](nstouchbaritem/viewcontroller.md): The view controller associated with this item.
- [view](nstouchbaritem/view.md): The view associated with this item.

### Using template images

- [touchBarAddDetailTemplateName](nsimage/touchbaradddetailtemplatename.md): A template image for showing additional detail for an item.
- [touchBarAddTemplateName](nsimage/touchbaraddtemplatename.md): A template image for creating a new item.
- [touchBarAlarmTemplateName](nsimage/touchbaralarmtemplatename.md): A template image for setting or showing an alarm.
- [touchBarAudioInputMuteTemplateName](nsimage/touchbaraudioinputmutetemplatename.md): A template image for muting audio input or denoting that audio input is muted.
- [touchBarAudioInputTemplateName](nsimage/touchbaraudioinputtemplatename.md): A template image for denoting audio input.
- [touchBarAudioOutputMuteTemplateName](nsimage/touchbaraudiooutputmutetemplatename.md): A template image for muting audio output or for denoting that audio output is muted.
- [touchBarAudioOutputVolumeHighTemplateName](nsimage/touchbaraudiooutputvolumehightemplatename.md): A template image for setting the audio output volume to a high level, or for denoting that the audio is at the peak volume.
- [touchBarAudioOutputVolumeLowTemplateName](nsimage/touchbaraudiooutputvolumelowtemplatename.md): A template image for setting the audio output volume to a low level, or for denoting that it is set to a low level.
- [touchBarAudioOutputVolumeMediumTemplateName](nsimage/touchbaraudiooutputvolumemediumtemplatename.md): A template image for setting the audio output volume to a medium level, or for denoting that it is set to a medium level.
- [touchBarAudioOutputVolumeOffTemplateName](nsimage/touchbaraudiooutputvolumeofftemplatename.md): A template image for setting the audio output volume to silent, or for denoting that it is set to silent.
- [touchBarBookmarksTemplateName](nsimage/touchbarbookmarkstemplatename.md): A template image for showing app-specific bookmarks.
- [touchBarColorPickerFillName](nsimage/touchbarcolorpickerfillname.md): A template image for showing a color picker so the user can select a fill color.
- [touchBarColorPickerFontName](nsimage/touchbarcolorpickerfontname.md): A template image for showing a color picker so the user can select a text color.
- [touchBarColorPickerStrokeName](nsimage/touchbarcolorpickerstrokename.md): A template image for showing a color picker so the user can select a stroke color.
- [touchBarCommunicationAudioTemplateName](nsimage/touchbarcommunicationaudiotemplatename.md): A template image for initiating or denoting audio communication.
- [touchBarCommunicationVideoTemplateName](nsimage/touchbarcommunicationvideotemplatename.md): A template image for initiating or denoting video communication.
- [touchBarComposeTemplateName](nsimage/touchbarcomposetemplatename.md): A template image for opening a new document or view in edit mode.
- [touchBarDeleteTemplateName](nsimage/touchbardeletetemplatename.md): A template image for deleting the current or selected item.
- [touchBarDownloadTemplateName](nsimage/touchbardownloadtemplatename.md): A template image for downloading an item.
- [touchBarEnterFullScreenTemplateName](nsimage/touchbarenterfullscreentemplatename.md): A template image for entering full screen mode.
- [touchBarExitFullScreenTemplateName](nsimage/touchbarexitfullscreentemplatename.md): A template image for exiting full screen mode.
- [touchBarFastForwardTemplateName](nsimage/touchbarfastforwardtemplatename.md): A template image for moving forward through media playback or slides.
- [touchBarFolderTemplateName](nsimage/touchbarfoldertemplatename.md): A template image for opening or representing a folder.
- [touchBarFolderCopyToTemplateName](nsimage/touchbarfoldercopytotemplatename.md): A template image for copying an item to a destination.
- [touchBarFolderMoveToTemplateName](nsimage/touchbarfoldermovetotemplatename.md): A template image for moving an item to a destination.
- [touchBarGetInfoTemplateName](nsimage/touchbargetinfotemplatename.md): A template image for showing information about an item.
- [touchBarGoBackTemplateName](nsimage/touchbargobacktemplatename.md): A template image for returning to the previous screen or location.
- [touchBarGoDownTemplateName](nsimage/touchbargodowntemplatename.md): A template image for moving to the next item in a list.
- [touchBarGoForwardTemplateName](nsimage/touchbargoforwardtemplatename.md): A template image for moving to the next screen or location.
- [touchBarGoUpTemplateName](nsimage/touchbargouptemplatename.md): A template image for moving to the previous item in a list.
- [touchBarHistoryTemplateName](nsimage/touchbarhistorytemplatename.md): A template image for showing history information, such as recent downloads.
- [touchBarIconViewTemplateName](nsimage/touchbariconviewtemplatename.md): A template image for showing items in an icon view.
- [touchBarListViewTemplateName](nsimage/touchbarlistviewtemplatename.md): A template image for showing items in a list view.
- [touchBarMailTemplateName](nsimage/touchbarmailtemplatename.md): A template image for creating an email message.
- [touchBarNewFolderTemplateName](nsimage/touchbarnewfoldertemplatename.md): A template image for creating a new folder.
- [touchBarNewMessageTemplateName](nsimage/touchbarnewmessagetemplatename.md): A template image for creating a new message, or for denoting the use of messaging.
- [touchBarOpenInBrowserTemplateName](nsimage/touchbaropeninbrowsertemplatename.md): A template image for opening an item in the user’s browser.
- [touchBarPauseTemplateName](nsimage/touchbarpausetemplatename.md): A template image for pausing media playback or slides.
- [touchBarPlayTemplateName](nsimage/touchbarplaytemplatename.md): A template image for starting or resuming playback of media or slides.
- [touchBarPlayPauseTemplateName](nsimage/touchbarplaypausetemplatename.md): A template image for toggling between playing and pausing media or slides.
- [touchBarPlayheadTemplateName](nsimage/touchbarplayheadtemplatename.md): A template image for denoting the current playback position within a timeline track.
- [touchBarQuickLookTemplateName](nsimage/touchbarquicklooktemplatename.md): A template image for opening an item in Quick Look.
- [touchBarRecordStartTemplateName](nsimage/touchbarrecordstarttemplatename.md): A template image for starting recording.
- [touchBarRecordStopTemplateName](nsimage/touchbarrecordstoptemplatename.md): A template image for stopping recording or stopping playback of media or slides.
- [touchBarRefreshTemplateName](nsimage/touchbarrefreshtemplatename.md): A template image for refreshing displayed data.
- [touchBarRewindTemplateName](nsimage/touchbarrewindtemplatename.md): A template image for moving backwards through media or slides.
- [touchBarRotateLeftTemplateName](nsimage/touchbarrotatelefttemplatename.md): A template image for rotating an item counterclockwise.
- [touchBarRotateRightTemplateName](nsimage/touchbarrotaterighttemplatename.md): A template image for rotating an item clockwise.
- [touchBarSearchTemplateName](nsimage/touchbarsearchtemplatename.md): A template image for showing a search field or for initiating a search.
- [touchBarShareTemplateName](nsimage/touchbarsharetemplatename.md): A template image for sharing content with others directly or via social media.
- [touchBarSidebarTemplateName](nsimage/touchbarsidebartemplatename.md): A template image for showing a sidebar in the current view.
- [touchBarSkipBackTemplateName](nsimage/touchbarskipbacktemplatename.md): A template image for skipping to the previous chapter or location during media playback.
- [touchBarSkipToStartTemplateName](nsimage/touchbarskiptostarttemplatename.md): A template image for skipping to the start of media playback.
- [touchBarSkipBack30SecondsTemplateName](nsimage/touchbarskipback30secondstemplatename.md): A template image for skipping back 30 seconds during media playback.
- [touchBarSkipBack15SecondsTemplateName](nsimage/touchbarskipback15secondstemplatename.md): A template image for skipping back 15 seconds during media playback.
- [touchBarSkipAhead15SecondsTemplateName](nsimage/touchbarskipahead15secondstemplatename.md): A template image for skipping ahead 15 seconds during media playback.
- [touchBarSkipAhead30SecondsTemplateName](nsimage/touchbarskipahead30secondstemplatename.md): A template image for skipping ahead 30 seconds during media playback.
- [touchBarSkipToEndTemplateName](nsimage/touchbarskiptoendtemplatename.md): A template image for skipping to the end of media playback.
- [touchBarSkipAheadTemplateName](nsimage/touchbarskipaheadtemplatename.md): A template image for skipping to the next chapter or location during media playback.
- [touchBarSlideshowTemplateName](nsimage/touchbarslideshowtemplatename.md): A template image for starting a slideshow.
- [touchBarTagIconTemplateName](nsimage/touchbartagicontemplatename.md): A template image for applying a tag to an item.
- [touchBarTextBoxTemplateName](nsimage/touchbartextboxtemplatename.md): A template image for inserting a text box.
- [touchBarTextListTemplateName](nsimage/touchbartextlisttemplatename.md): A template image for inserting a list or converting text to list form.
- [touchBarTextBoldTemplateName](nsimage/touchbartextboldtemplatename.md): A template image for making selected text bold.
- [touchBarTextItalicTemplateName](nsimage/touchbartextitalictemplatename.md): A template image for italicizing the selected text.
- [touchBarTextUnderlineTemplateName](nsimage/touchbartextunderlinetemplatename.md): A template image for underlining text.
- [touchBarTextStrikethroughTemplateName](nsimage/touchbartextstrikethroughtemplatename.md): A template image for striking through text.
- [touchBarTextJustifiedAlignTemplateName](nsimage/touchbartextjustifiedaligntemplatename.md): A template image for fully justifying text.
- [touchBarTextLeftAlignTemplateName](nsimage/touchbartextleftaligntemplatename.md): A template image for aligning text to the left.
- [touchBarTextCenterAlignTemplateName](nsimage/touchbartextcenteraligntemplatename.md): A template image for centering text.
- [touchBarTextRightAlignTemplateName](nsimage/touchbartextrightaligntemplatename.md): A template image for aligning text to the right.
- [touchBarUserTemplateName](nsimage/touchbarusertemplatename.md): A template image for showing or representing user information.
- [touchBarUserAddTemplateName](nsimage/touchbaruseraddtemplatename.md): A template image for creating a new user account.
- [touchBarUserGroupTemplateName](nsimage/touchbarusergrouptemplatename.md): A template image for showing or representing a group of users.
- [touchBarVolumeUpTemplateName](nsimage/touchbarvolumeuptemplatename.md): A template image for increasing the audio output volume.
- [touchBarVolumeDownTemplateName](nsimage/touchbarvolumedowntemplatename.md): A template image for reducing the audio output volume.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSButtonTouchBarItem](nsbuttontouchbaritem.md)
- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md)
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md)
- [NSCustomTouchBarItem](nscustomtouchbaritem.md)
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md)
- [NSPickerTouchBarItem](nspickertouchbaritem.md)
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md)
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md)
- [NSSliderTouchBarItem](nsslidertouchbaritem.md)
- [NSStepperTouchBarItem](nssteppertouchbaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Touch Bar items

- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md): A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSTouchBarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A UI control shown in the Touch Bar on supported models of MacBook Pro.

## Declaration

```objectivec
@interface NSTouchBarItem : NSObject
```

<a id="overview"></a>

## Overview

An instance of the [NSTouchBarItem](nstouchbaritem.md) class is called an *item*. It appears to the user on the Touch Bar, typically along with other items, within the (invisible) bounds of the view for an [NSTouchBar](nstouchbar.md) object, called a *bar*.

You use an item by adding it or its identifier to one or another of a bar’s arrays, depending on your app’s architecture and on the user customization you want to support. Because of the close interaction between bars and items, be sure you have read the overview for the [NSTouchBar](nstouchbar.md) class before continuing here to learn about items.

AppKit provides a rich set of subclasses of [NSTouchBarItem](nstouchbaritem.md), each of which is described in the corresponding class reference document:

- An [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md) object (a *candidate-list item*), along with its delegate, provides a list of textual suggestions for the current text view
- An [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md) object (a *color picker item*) provides a system-defined color picker
- An [NSCustomTouchBarItem](nscustomtouchbaritem.md) object (a *custom item*) contains a responder of your choice, such as a view, a button, or a scrubber (an instance of the [NSScrubber](nsscrubber.md) class)
- An [NSGroupTouchBarItem](nsgrouptouchbaritem.md) object (a *group item*) provides a bar to contain other items
- An [NSPopoverTouchBarItem](nspopovertouchbaritem.md) object (a *popover item*) provides a two-state control that, when touched or pressed, expands into its second state, showing the contents of a bar it owns
- An [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md) object (a *sharing service picker item*), along with its delegate, provides a list of objects eligible for sharing
- An [NSSliderTouchBarItem](nsslidertouchbaritem.md) object (a *slider item*) provides a slider control for choosing a value in a range

The two most commonly-used item classes are [NSCustomTouchBarItem](nscustomtouchbaritem.md) and [NSPopoverTouchBarItem](nspopovertouchbaritem.md).

Refer to the following sample code projects which demonstrate how to use [NSTouchBarItem](nstouchbaritem.md) and related classes:

- [Creating and Customizing the Touch Bar](creating-and-customizing-the-touch-bar.md)
- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md)

<a id="Custom-items"></a>

### Custom items

You typically use a *custom item* (an instance of the [NSCustomTouchBarItem](nscustomtouchbaritem.md) class) to hold a view. For example, to place a button in the Touch Bar, proceed as follows:

1. Use an [NSButton](nsbutton.md) convenience initializer such as [buttonWithTitle:image:target:action:](nsbutton/init%28title_image_target_action_%29.md) to create and configure the button.
2. Set the [view](nstouchbaritem/view.md) property for a custom item to point to the new button.

> **Note**

>  When you create custom items, it’s important to use convenience initializers, available starting in macOS 10.12, for the [NSButton](nsbutton.md), [NSSegmentedControl](nssegmentedcontrol.md), and [NSSlider](nsslider.md) classes. These initializers take care of sizing their controls correctly for the Touch Bar, and they configure appearance appropriately for the Touch Bar. If you don’t use the convenience initializers, it’s your app’s responsibility to ensure correct sizing and appearance.

<a id="Popover-items"></a>

### Popover items

A *popover item* (an instance of the [NSPopoverTouchBarItem](nspopovertouchbaritem.md) class) — the second commonly-used type — lets you provide a new bar (an [NSTouchBar](nstouchbar.md) object) when a user taps, or presses-and-holds, on the collapsed representation of the popover item.

In its expanded state, a popover appears as an overlay above other items in the Touch Bar.

To show a bar when a user taps a popover item, specify a bar in the item’s [popoverTouchBar](nspopovertouchbaritem/popovertouchbar.md) property. Enable press-and-hold by specifying a bar in the [pressAndHoldTouchBar](nspopovertouchbaritem/pressandholdtouchbar.md) property. The press-and-hold feature is suitable only for a simple popover, such as one that contains a single segmented control (an instance of the [NSSegmentedControl](nssegmentedcontrol.md) class) or slider (an instance of the [NSSliderTouchBarItem](nsslidertouchbaritem.md) class).

> **Note**

>  If your popover bar requires significant user interaction and contains many items or many scroll views, don’t enable press-and-hold; doing so can result in an awkward user experience.

The system automatically shows a chevron in the popover item under the following conditions: You specify the same [NSTouchBar](nstouchbar.md) object for both [pressAndHoldTouchBar](nspopovertouchbaritem/pressandholdtouchbar.md) and [popoverTouchBar](nspopovertouchbaritem/popovertouchbar.md) properties, *and* you use the default view for the popover item’s [collapsedRepresentation](nspopovertouchbaritem/collapsedrepresentation.md) property.

If you provide a popover item that contains a scrubber (an [NSScrubber](nsscrubber.md) instance), you’ll likely want to dismiss both the scrubber and the popover after the user makes their selection in the scrubber. A good approach to achieve this user interaction is to subclass [NSPopoverTouchBarItem](nspopovertouchbaritem.md), employing your instance of the subclass as the scrubber’s delegate. You can then configure the delegate object, within its [didFinishInteractingWithScrubber:](nsscrubberdelegate/didfinishinteracting%28with_%29.md) method, to call the popover’s [dismissPopover:](nspopovertouchbaritem/dismisspopover%28__%29.md) method.

If you place a segmented control in a bar for a popover item, take care *not* to use [NSSegmentSwitchTrackingMomentary](nssegmentedcontrol/switchtracking/momentary.md) option of the [NSSegmentSwitchTracking](nssegmentedcontrol/switchtracking.md) enumeration because doing so interferes with the user’s operation of the control.

<a id="Other-common-item-types"></a>

### Other common item types

To provide a *slider item*, always use the [NSSliderTouchBarItem](nsslidertouchbaritem.md) class, which employs a standard slider but is optimized for user interaction with the Touch Bar. (That is, don’t instead add an [NSSlider](nsslider.md) object directly to a custom item.)

A *group item* (an instance of the [NSGroupTouchBarItem](nsgrouptouchbaritem.md) class) is a container that provides a bar, in its [groupTouchBar](nsgrouptouchbaritem/grouptouchbar.md) property, with its own array of items. You can enable customization for the items in a group’s contained bar, in the same way you would for items directly within a top-level bar. Using a group item lets you provide different user customization rules for different parts of the Touch Bar. Using a group item also lets you enable centering of the group within the Touch Bar.

A *spacing item* lets you add custom spacing between items in a bar. Specify a spacing item for a bar by assigning the [NSTouchBarItemIdentifierFixedSpaceSmall](nstouchbaritem/identifier-swift.struct/fixedspacesmall.md), [NSTouchBarItemIdentifierFixedSpaceLarge](nstouchbaritem/identifier-swift.struct/fixedspacelarge.md), or [NSTouchBarItemIdentifierFlexibleSpace](nstouchbaritem/identifier-swift.struct/flexiblespace.md) identifier to an item, and adding that item to the bar’s items array. The system automatically instantiates and configures spacing items based on the identifiers you specify.

<a id="Configuration"></a>

### Configuration

You must configure each item with a unique identifier, and can optionally assign a visibility priority or tag it as a principal item.

**NSTouchBarItem identification.** You must provide a unique identifier for each item in the bar, apart from spacing items. Specify an identifier, of type [NSTouchBarItemIdentifier](nstouchbaritem/identifier-swift.struct.md) (called an *item identifier*), for each item when you initialize it. The item identifier serves as a persistable weak reference to the item. The system uses item identifiers to populate bars and to track and record changes for user customization.

**NSTouchBarItem priority for visibility.** If the system is showing a bar in the Touch Bar, but horizontal space is constrained and the bar defines more items than will fit, the system hides some of the items. You influence this hide/show behavior by setting a value for the [visibilityPriority](nstouchbaritem/visibilitypriority.md) property of each item.

Lower-visibility-priority items get hidden by the system, as needed, before higher-visibility-priority items do.

To set visibility priority, use the constants in the [NSTouchBarItemPriority](nstouchbaritem/priority.md) enumeration, or assign an integer value. The value `0` indicates [NSTouchBarItemPriorityNormal](nstouchbaritem/priority/normal.md) visibility priority. Visibility priority increases with increasing numerical value. The [NSTouchBarItemPriorityLow](nstouchbaritem/priority/low.md) constant provides a value of `-1000`; the [NSTouchBarItemPriorityHigh](nstouchbaritem/priority/high.md) constant, a value `+1000`. You can use integers outside of this range if you need to.

The system hides or shows groups of identical-priority items (defined within a single bar) together. The one exception to this rule is for items whose visibility priority is [NSTouchBarItemPriorityNormal](nstouchbaritem/priority/normal.md); these items get hidden one-by-one, with the normal-priority item farthest to the right getting hidden first. If horizontal space later increases in the Touch Bar, and hidden, normal-priority items become eligible for display, the system first shows the most recently-hidden of those items.

**Principal Items.** Within a bar, you can optionally specify an item as having special significance by employing the [principalItemIdentifier](nstouchbar/principalitemidentifier.md) property. The system attempts to center a principal item within the Touch Bar. If you want a group of items to appear centered in the Touch Bar, designate the group item (of type [NSTouchBarItem](nstouchbaritem.md)) as the principal item.

If more than one bar in the responder chain is eligible to be visible in the Touch Bar, and more than one of those has a principal item, the system determines which one to center in the Touch Bar.

<a id="Fonts-images-and-colors"></a>

#### Fonts, images, and colors

When using a button in a custom item, don’t attempt to set the button title’s font. In the Touch Bar, the system specifies fonts for standard controls.

If you need to specify a font, such as for custom drawing, use the [systemFontOfSize:](nsfont/systemfont%28ofsize_%29.md) class method (or related methods) of the [NSFont](nsfont.md) class. Use a font size of `0` to automatically obtain appropriate sizing for the Touch Bar.

If you use an image in a button or other control in the Touch Bar, take care to employ a template image. Template images in the Touch Bar respond automatically to system white-point changes, and automatically react to user interactions. The overview in this document lists the built-in Touch Bar template images.

To use your own image assets, use Retina-resolution images, designated as `@2x` in your asset catalog and with a maximum height of 30 points (corresponding to 60 pixels).

To set colors on objects within an [NSTouchBarItem](nstouchbaritem.md) object, use AppKit named colors and use a bezel color property (available starting in macOS 10.12.1). Named colors appear correctly in the Touch Bar, support appearance vibrancy, and respond to system white-point changes. In a button or a segmented control, employ the bezel color property to ensure appropriate appearance in the Touch Bar.

To set the background color on a button within a custom item, use code like this:

```swift
myButton.bezelColor = NSColor.controlColor 
```

To set color on text and glyphs in the Touch Bar, use the following colors from the [NSColor](nscolor.md) class:

- [labelColor](nscolor/labelcolor.md)
- [secondaryLabelColor](nscolor/secondarylabelcolor.md)
- [tertiaryLabelColor](nscolor/tertiarylabelcolor.md)
- [quaternaryLabelColor](nscolor/quaternarylabelcolor.md)

The system automatically changes the relative brightness and the white-point of these colors, depending on the ambient light, and depending on other factors such as keyboard backlight level. Always use these colors, or colors that dynamically derive from these colors, for control backgrounds, text, icons, and glyphs in the Touch Bar.

<a id="Handling-touch-events"></a>

#### Handling touch events

The easiest way to handle touch events in an item is to use AppKit controls, such as by adding a button, a segmented control, or a scrubber to the item. Standard AppKit controls convey touch events to your specified targets automatically, so use standard controls whenever possible in your app.

If standard controls are insufficient, you can create composite views with a combination of standard controls, custom views, and gesture recognizers that you manually add to those custom views.

If you require the lowest-level of control for touch event processing, you can use the [NSTouch](nstouch.md) class directly. You might go this route, for example, to provide good user feedback in the case of a control placed within a scroll view.Direct use of touch methods allows fine-grained control over interaction. You can, for example, highlight a control immediately upon a user touching it, and then remove the highlight if the user then, without lifting the finger, performs a scroll gesture.

If using the [NSTouch](nstouch.md) class directly, be sure to implement the [touchesCancelledWithEvent:](nsgesturerecognizer/touchescancelled%28with_%29.md) responder method, because users can perform touch interactions that result in canceled touches.

## Topics

### Creating a bar item

- [initWithIdentifier:](nstouchbaritem/init%28identifier_%29.md): Creates a new item with the specified identifier.
- [NSTouchBarItemIdentifier](nstouchbaritem/identifier-swift.struct.md): An identifier for an item in the Touch Bar.
- [initWithCoder:](nstouchbaritem/init%28coder_%29.md): Initializes and returns a new item from a storyboard or nib file.

### Identifying a bar item

- [identifier](nstouchbaritem/identifier-swift.property.md): The identifier for this item.
- [NSTouchBarItemIdentifier](nstouchbaritem/identifier-swift.struct.md): An identifier for an item in the Touch Bar.

### Managing item visibility

- [visibilityPriority](nstouchbaritem/visibilitypriority.md): Determines which items are shown in a bar when space is limited.
- [NSTouchBarItemPriority](nstouchbaritem/priority.md): Priorities for the visibility of a Touch Bar item.
- [visible](nstouchbaritem/isvisible.md): A Boolean value that reflects whether or not the item is visible.

### Configuring bar customization

- [customizationLabel](nstouchbaritem/customizationlabel.md): The user-visible string identifying this item during bar customization.

### Subclassing bar items

- [viewController](nstouchbaritem/viewcontroller.md): The view controller associated with this item.
- [view](nstouchbaritem/view.md): The view associated with this item.

### Using template images

- [NSImageNameTouchBarAddDetailTemplate](nsimage/touchbaradddetailtemplatename.md): A template image for showing additional detail for an item.
- [NSImageNameTouchBarAddTemplate](nsimage/touchbaraddtemplatename.md): A template image for creating a new item.
- [NSImageNameTouchBarAlarmTemplate](nsimage/touchbaralarmtemplatename.md): A template image for setting or showing an alarm.
- [NSImageNameTouchBarAudioInputMuteTemplate](nsimage/touchbaraudioinputmutetemplatename.md): A template image for muting audio input or denoting that audio input is muted.
- [NSImageNameTouchBarAudioInputTemplate](nsimage/touchbaraudioinputtemplatename.md): A template image for denoting audio input.
- [NSImageNameTouchBarAudioOutputMuteTemplate](nsimage/touchbaraudiooutputmutetemplatename.md): A template image for muting audio output or for denoting that audio output is muted.
- [NSImageNameTouchBarAudioOutputVolumeHighTemplate](nsimage/touchbaraudiooutputvolumehightemplatename.md): A template image for setting the audio output volume to a high level, or for denoting that the audio is at the peak volume.
- [NSImageNameTouchBarAudioOutputVolumeLowTemplate](nsimage/touchbaraudiooutputvolumelowtemplatename.md): A template image for setting the audio output volume to a low level, or for denoting that it is set to a low level.
- [NSImageNameTouchBarAudioOutputVolumeMediumTemplate](nsimage/touchbaraudiooutputvolumemediumtemplatename.md): A template image for setting the audio output volume to a medium level, or for denoting that it is set to a medium level.
- [NSImageNameTouchBarAudioOutputVolumeOffTemplate](nsimage/touchbaraudiooutputvolumeofftemplatename.md): A template image for setting the audio output volume to silent, or for denoting that it is set to silent.
- [NSImageNameTouchBarBookmarksTemplate](nsimage/touchbarbookmarkstemplatename.md): A template image for showing app-specific bookmarks.
- [NSImageNameTouchBarColorPickerFill](nsimage/touchbarcolorpickerfillname.md): A template image for showing a color picker so the user can select a fill color.
- [NSImageNameTouchBarColorPickerFont](nsimage/touchbarcolorpickerfontname.md): A template image for showing a color picker so the user can select a text color.
- [NSImageNameTouchBarColorPickerStroke](nsimage/touchbarcolorpickerstrokename.md): A template image for showing a color picker so the user can select a stroke color.
- [NSImageNameTouchBarCommunicationAudioTemplate](nsimage/touchbarcommunicationaudiotemplatename.md): A template image for initiating or denoting audio communication.
- [NSImageNameTouchBarCommunicationVideoTemplate](nsimage/touchbarcommunicationvideotemplatename.md): A template image for initiating or denoting video communication.
- [NSImageNameTouchBarComposeTemplate](nsimage/touchbarcomposetemplatename.md): A template image for opening a new document or view in edit mode.
- [NSImageNameTouchBarDeleteTemplate](nsimage/touchbardeletetemplatename.md): A template image for deleting the current or selected item.
- [NSImageNameTouchBarDownloadTemplate](nsimage/touchbardownloadtemplatename.md): A template image for downloading an item.
- [NSImageNameTouchBarEnterFullScreenTemplate](nsimage/touchbarenterfullscreentemplatename.md): A template image for entering full screen mode.
- [NSImageNameTouchBarExitFullScreenTemplate](nsimage/touchbarexitfullscreentemplatename.md): A template image for exiting full screen mode.
- [NSImageNameTouchBarFastForwardTemplate](nsimage/touchbarfastforwardtemplatename.md): A template image for moving forward through media playback or slides.
- [NSImageNameTouchBarFolderTemplate](nsimage/touchbarfoldertemplatename.md): A template image for opening or representing a folder.
- [NSImageNameTouchBarFolderCopyToTemplate](nsimage/touchbarfoldercopytotemplatename.md): A template image for copying an item to a destination.
- [NSImageNameTouchBarFolderMoveToTemplate](nsimage/touchbarfoldermovetotemplatename.md): A template image for moving an item to a destination.
- [NSImageNameTouchBarGetInfoTemplate](nsimage/touchbargetinfotemplatename.md): A template image for showing information about an item.
- [NSImageNameTouchBarGoBackTemplate](nsimage/touchbargobacktemplatename.md): A template image for returning to the previous screen or location.
- [NSImageNameTouchBarGoDownTemplate](nsimage/touchbargodowntemplatename.md): A template image for moving to the next item in a list.
- [NSImageNameTouchBarGoForwardTemplate](nsimage/touchbargoforwardtemplatename.md): A template image for moving to the next screen or location.
- [NSImageNameTouchBarGoUpTemplate](nsimage/touchbargouptemplatename.md): A template image for moving to the previous item in a list.
- [NSImageNameTouchBarHistoryTemplate](nsimage/touchbarhistorytemplatename.md): A template image for showing history information, such as recent downloads.
- [NSImageNameTouchBarIconViewTemplate](nsimage/touchbariconviewtemplatename.md): A template image for showing items in an icon view.
- [NSImageNameTouchBarListViewTemplate](nsimage/touchbarlistviewtemplatename.md): A template image for showing items in a list view.
- [NSImageNameTouchBarMailTemplate](nsimage/touchbarmailtemplatename.md): A template image for creating an email message.
- [NSImageNameTouchBarNewFolderTemplate](nsimage/touchbarnewfoldertemplatename.md): A template image for creating a new folder.
- [NSImageNameTouchBarNewMessageTemplate](nsimage/touchbarnewmessagetemplatename.md): A template image for creating a new message, or for denoting the use of messaging.
- [NSImageNameTouchBarOpenInBrowserTemplate](nsimage/touchbaropeninbrowsertemplatename.md): A template image for opening an item in the user’s browser.
- [NSImageNameTouchBarPauseTemplate](nsimage/touchbarpausetemplatename.md): A template image for pausing media playback or slides.
- [NSImageNameTouchBarPlayTemplate](nsimage/touchbarplaytemplatename.md): A template image for starting or resuming playback of media or slides.
- [NSImageNameTouchBarPlayPauseTemplate](nsimage/touchbarplaypausetemplatename.md): A template image for toggling between playing and pausing media or slides.
- [NSImageNameTouchBarPlayheadTemplate](nsimage/touchbarplayheadtemplatename.md): A template image for denoting the current playback position within a timeline track.
- [NSImageNameTouchBarQuickLookTemplate](nsimage/touchbarquicklooktemplatename.md): A template image for opening an item in Quick Look.
- [NSImageNameTouchBarRecordStartTemplate](nsimage/touchbarrecordstarttemplatename.md): A template image for starting recording.
- [NSImageNameTouchBarRecordStopTemplate](nsimage/touchbarrecordstoptemplatename.md): A template image for stopping recording or stopping playback of media or slides.
- [NSImageNameTouchBarRefreshTemplate](nsimage/touchbarrefreshtemplatename.md): A template image for refreshing displayed data.
- [NSImageNameTouchBarRewindTemplate](nsimage/touchbarrewindtemplatename.md): A template image for moving backwards through media or slides.
- [NSImageNameTouchBarRotateLeftTemplate](nsimage/touchbarrotatelefttemplatename.md): A template image for rotating an item counterclockwise.
- [NSImageNameTouchBarRotateRightTemplate](nsimage/touchbarrotaterighttemplatename.md): A template image for rotating an item clockwise.
- [NSImageNameTouchBarSearchTemplate](nsimage/touchbarsearchtemplatename.md): A template image for showing a search field or for initiating a search.
- [NSImageNameTouchBarShareTemplate](nsimage/touchbarsharetemplatename.md): A template image for sharing content with others directly or via social media.
- [NSImageNameTouchBarSidebarTemplate](nsimage/touchbarsidebartemplatename.md): A template image for showing a sidebar in the current view.
- [NSImageNameTouchBarSkipBackTemplate](nsimage/touchbarskipbacktemplatename.md): A template image for skipping to the previous chapter or location during media playback.
- [NSImageNameTouchBarSkipToStartTemplate](nsimage/touchbarskiptostarttemplatename.md): A template image for skipping to the start of media playback.
- [NSImageNameTouchBarSkipBack30SecondsTemplate](nsimage/touchbarskipback30secondstemplatename.md): A template image for skipping back 30 seconds during media playback.
- [NSImageNameTouchBarSkipBack15SecondsTemplate](nsimage/touchbarskipback15secondstemplatename.md): A template image for skipping back 15 seconds during media playback.
- [NSImageNameTouchBarSkipAhead15SecondsTemplate](nsimage/touchbarskipahead15secondstemplatename.md): A template image for skipping ahead 15 seconds during media playback.
- [NSImageNameTouchBarSkipAhead30SecondsTemplate](nsimage/touchbarskipahead30secondstemplatename.md): A template image for skipping ahead 30 seconds during media playback.
- [NSImageNameTouchBarSkipToEndTemplate](nsimage/touchbarskiptoendtemplatename.md): A template image for skipping to the end of media playback.
- [NSImageNameTouchBarSkipAheadTemplate](nsimage/touchbarskipaheadtemplatename.md): A template image for skipping to the next chapter or location during media playback.
- [NSImageNameTouchBarSlideshowTemplate](nsimage/touchbarslideshowtemplatename.md): A template image for starting a slideshow.
- [NSImageNameTouchBarTagIconTemplate](nsimage/touchbartagicontemplatename.md): A template image for applying a tag to an item.
- [NSImageNameTouchBarTextBoxTemplate](nsimage/touchbartextboxtemplatename.md): A template image for inserting a text box.
- [NSImageNameTouchBarTextListTemplate](nsimage/touchbartextlisttemplatename.md): A template image for inserting a list or converting text to list form.
- [NSImageNameTouchBarTextBoldTemplate](nsimage/touchbartextboldtemplatename.md): A template image for making selected text bold.
- [NSImageNameTouchBarTextItalicTemplate](nsimage/touchbartextitalictemplatename.md): A template image for italicizing the selected text.
- [NSImageNameTouchBarTextUnderlineTemplate](nsimage/touchbartextunderlinetemplatename.md): A template image for underlining text.
- [NSImageNameTouchBarTextStrikethroughTemplate](nsimage/touchbartextstrikethroughtemplatename.md): A template image for striking through text.
- [NSImageNameTouchBarTextJustifiedAlignTemplate](nsimage/touchbartextjustifiedaligntemplatename.md): A template image for fully justifying text.
- [NSImageNameTouchBarTextLeftAlignTemplate](nsimage/touchbartextleftaligntemplatename.md): A template image for aligning text to the left.
- [NSImageNameTouchBarTextCenterAlignTemplate](nsimage/touchbartextcenteraligntemplatename.md): A template image for centering text.
- [NSImageNameTouchBarTextRightAlignTemplate](nsimage/touchbartextrightaligntemplatename.md): A template image for aligning text to the right.
- [NSImageNameTouchBarUserTemplate](nsimage/touchbarusertemplatename.md): A template image for showing or representing user information.
- [NSImageNameTouchBarUserAddTemplate](nsimage/touchbaruseraddtemplatename.md): A template image for creating a new user account.
- [NSImageNameTouchBarUserGroupTemplate](nsimage/touchbarusergrouptemplatename.md): A template image for showing or representing a group of users.
- [NSImageNameTouchBarVolumeUpTemplate](nsimage/touchbarvolumeuptemplatename.md): A template image for increasing the audio output volume.
- [NSImageNameTouchBarVolumeDownTemplate](nsimage/touchbarvolumedowntemplatename.md): A template image for reducing the audio output volume.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSButtonTouchBarItem](nsbuttontouchbaritem.md)
- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md)
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md)
- [NSCustomTouchBarItem](nscustomtouchbaritem.md)
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md)
- [NSPickerTouchBarItem](nspickertouchbaritem.md)
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md)
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md)
- [NSSliderTouchBarItem](nsslidertouchbaritem.md)
- [NSStepperTouchBarItem](nssteppertouchbaritem.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Touch Bar items

- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md): A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md): An object that specifies how user interface elements resize themselves when space is constrained.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
