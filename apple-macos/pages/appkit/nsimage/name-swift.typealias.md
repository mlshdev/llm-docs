> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/name-swift.typealias](https://developer.apple.com/documentation/appkit/nsimage/name-swift.typealias)

# NSImage.Name (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Named images, defined by the system or you, for use in your app.

## Declaration

```swift
typealias Name = String
```

<a id="Discussion"></a>

## Discussion

The appearance of system-supplied images can change between releases. If you use an image for its intended purpose (and not because of how it looks), your code should look correct from release to release.

The size and aspect ratio of system images can also change between releases. In some situations, you should explicitly resize images as appropriate for your use. If you use these images in conjunction with an [NSButtonCell](../nsbuttoncell.md) object, however, you can use the [imageScaling](../nsbuttoncell/imagescaling.md) property of the cell to control scaling instead. Similarly, for an [NSSegmentedCell](../nssegmentedcell.md) object, you can use the [setImageScaling(\_:forSegment:)](../nssegmentedcell/setimagescaling%28__forsegment_%29.md): method to control scaling.

Constants that end in the word “Template” represent template images. These images can be processed into variants appropriate for different situations.  For example, these images can invert in a selected table view row. See [isTemplate](istemplate.md) for more information.

Some images also contain the word “FreestandingTemplate”.  These images are template images that are appropriate for use as a borderless button—that is, it doesn’t need any extra bezel artwork behind it.

## Topics

### System Images

- [actionTemplateName](actiontemplatename.md): An action menu template image.
- [addTemplateName](addtemplatename.md): An add item template image.
- [advancedName](advancedname.md): Advanced preferences toolbar icon for the preferences window.
- [applicationIconName](applicationiconname.md): The app’s icon.
- [bluetoothTemplateName](bluetoothtemplatename.md): A Bluetooth template image.
- [bonjourName](bonjourname.md): A Bonjour icon.
- [bookmarksTemplateName](bookmarkstemplatename.md): Bookmarks image suitable for a template.
- [cautionName](cautionname.md): A caution image.
- [colorPanelName](colorpanelname.md): A color panel toolbar icon.
- [columnViewTemplateName](columnviewtemplatename.md): A column view mode template image.
- [computerName](computername.md): A computer icon.
- [enterFullScreenTemplateName](enterfullscreentemplatename.md): An enter full-screen mode template image.
- [everyoneName](everyonename.md): Permissions for all users.
- [exitFullScreenTemplateName](exitfullscreentemplatename.md): An exit full-screen mode template image.
- [flowViewTemplateName](flowviewtemplatename.md): A cover flow view mode template image.
- [folderName](foldername.md): A folder image.
- [folderBurnableName](folderburnablename.md): A burnable folder icon.
- [folderSmartName](foldersmartname.md): A smart folder icon.
- [followLinkFreestandingTemplateName](followlinkfreestandingtemplatename.md): A link template image.
- [fontPanelName](fontpanelname.md): A font panel toolbar icon.
- [goBackTemplateName](gobacktemplatename.md): A “go back” template image.
- [goForwardTemplateName](goforwardtemplatename.md): A “go forward” template image.
- [goLeftTemplateName](golefttemplatename.md): A “go back” template image.
- [goRightTemplateName](gorighttemplatename.md): A “go forward” template image.
- [homeTemplateName](hometemplatename.md): Home image suitable for a template.
- [iChatTheaterTemplateName](ichattheatertemplatename.md): An iChat Theater template image.
- [iconViewTemplateName](iconviewtemplatename.md): An icon view mode template image.
- [infoName](infoname.md): An information toolbar icon.
- [invalidDataFreestandingTemplateName](invaliddatafreestandingtemplatename.md): A template image used to denote invalid data.
- [leftFacingTriangleTemplateName](leftfacingtriangletemplatename.md): A generic left-facing triangle template image.
- [listViewTemplateName](listviewtemplatename.md): A list view mode template image.
- [lockLockedTemplateName](locklockedtemplatename.md): A locked padlock template image.
- [lockUnlockedTemplateName](lockunlockedtemplatename.md): An unlocked padlock template image.
- [menuMixedStateTemplateName](menumixedstatetemplatename.md): A horizontal dash, for use in menus.
- [menuOnStateTemplateName](menuonstatetemplatename.md): A check mark template image, for use in menus.
- [mobileMeName](mobilemename.md): A MobileMe icon.
- [multipleDocumentsName](multipledocumentsname.md): A drag image for multiple items.
- [networkName](networkname.md): A network icon.
- [pathTemplateName](pathtemplatename.md): A path button template image.
- [preferencesGeneralName](preferencesgeneralname.md): General preferences toolbar icon for the preferences window.
- [quickLookTemplateName](quicklooktemplatename.md): A Quick Look template image.
- [refreshFreestandingTemplateName](refreshfreestandingtemplatename.md): A refresh template image.
- [refreshTemplateName](refreshtemplatename.md): A refresh template image.
- [removeTemplateName](removetemplatename.md): A remove item template image.
- [revealFreestandingTemplateName](revealfreestandingtemplatename.md): A reveal contents template image.
- [rightFacingTriangleTemplateName](rightfacingtriangletemplatename.md): A generic right-facing triangle template image.
- [shareTemplateName](sharetemplatename.md): A share view template image.
- [slideshowTemplateName](slideshowtemplatename.md): A slideshow template image.
- [smartBadgeTemplateName](smartbadgetemplatename.md): A badge for a “smart” item.
- [statusAvailableName](statusavailablename.md): Small green indicator, similar to iChat’s available image.
- [statusNoneName](statusnonename.md): Small clear indicator.
- [statusPartiallyAvailableName](statuspartiallyavailablename.md): Small yellow indicator, similar to iChat’s idle image.
- [statusUnavailableName](statusunavailablename.md): Small red indicator, similar to iChat’s unavailable image.
- [stopProgressFreestandingTemplateName](stopprogressfreestandingtemplatename.md): A stop progress template image.
- [stopProgressTemplateName](stopprogresstemplatename.md): A stop progress button template image.
- [touchBarAddDetailTemplateName](touchbaradddetailtemplatename.md): A template image for showing additional detail for an item.
- [touchBarAddTemplateName](touchbaraddtemplatename.md): A template image for creating a new item.
- [touchBarAlarmTemplateName](touchbaralarmtemplatename.md): A template image for setting or showing an alarm.
- [touchBarAudioInputMuteTemplateName](touchbaraudioinputmutetemplatename.md): A template image for muting audio input or denoting that audio input is muted.
- [touchBarAudioInputTemplateName](touchbaraudioinputtemplatename.md): A template image for denoting audio input.
- [touchBarAudioOutputMuteTemplateName](touchbaraudiooutputmutetemplatename.md): A template image for muting audio output or for denoting that audio output is muted.
- [touchBarAudioOutputVolumeHighTemplateName](touchbaraudiooutputvolumehightemplatename.md): A template image for setting the audio output volume to a high level, or for denoting that the audio is at the peak volume.
- [touchBarAudioOutputVolumeLowTemplateName](touchbaraudiooutputvolumelowtemplatename.md): A template image for setting the audio output volume to a low level, or for denoting that it is set to a low level.
- [touchBarAudioOutputVolumeMediumTemplateName](touchbaraudiooutputvolumemediumtemplatename.md): A template image for setting the audio output volume to a medium level, or for denoting that it is set to a medium level.
- [touchBarAudioOutputVolumeOffTemplateName](touchbaraudiooutputvolumeofftemplatename.md): A template image for setting the audio output volume to silent, or for denoting that it is set to silent.
- [touchBarBookmarksTemplateName](touchbarbookmarkstemplatename.md): A template image for showing app-specific bookmarks.
- [touchBarColorPickerFillName](touchbarcolorpickerfillname.md): A template image for showing a color picker so the user can select a fill color.
- [touchBarColorPickerFontName](touchbarcolorpickerfontname.md): A template image for showing a color picker so the user can select a text color.
- [touchBarColorPickerStrokeName](touchbarcolorpickerstrokename.md): A template image for showing a color picker so the user can select a stroke color.
- [touchBarCommunicationAudioTemplateName](touchbarcommunicationaudiotemplatename.md): A template image for initiating or denoting audio communication.
- [touchBarCommunicationVideoTemplateName](touchbarcommunicationvideotemplatename.md): A template image for initiating or denoting video communication.
- [touchBarComposeTemplateName](touchbarcomposetemplatename.md): A template image for opening a new document or view in edit mode.
- [touchBarDeleteTemplateName](touchbardeletetemplatename.md): A template image for deleting the current or selected item.
- [touchBarDownloadTemplateName](touchbardownloadtemplatename.md): A template image for downloading an item.
- [touchBarEnterFullScreenTemplateName](touchbarenterfullscreentemplatename.md): A template image for entering full screen mode.
- [touchBarExitFullScreenTemplateName](touchbarexitfullscreentemplatename.md): A template image for exiting full screen mode.
- [touchBarFastForwardTemplateName](touchbarfastforwardtemplatename.md): A template image for moving forward through media playback or slides.
- [touchBarFolderCopyToTemplateName](touchbarfoldercopytotemplatename.md): A template image for copying an item to a destination.
- [touchBarFolderMoveToTemplateName](touchbarfoldermovetotemplatename.md): A template image for moving an item to a destination.
- [touchBarFolderTemplateName](touchbarfoldertemplatename.md): A template image for opening or representing a folder.
- [touchBarGetInfoTemplateName](touchbargetinfotemplatename.md): A template image for showing information about an item.
- [touchBarGoBackTemplateName](touchbargobacktemplatename.md): A template image for returning to the previous screen or location.
- [touchBarGoDownTemplateName](touchbargodowntemplatename.md): A template image for moving to the next item in a list.
- [touchBarGoForwardTemplateName](touchbargoforwardtemplatename.md): A template image for moving to the next screen or location.
- [touchBarGoUpTemplateName](touchbargouptemplatename.md): A template image for moving to the previous item in a list.
- [touchBarHistoryTemplateName](touchbarhistorytemplatename.md): A template image for showing history information, such as recent downloads.
- [touchBarIconViewTemplateName](touchbariconviewtemplatename.md): A template image for showing items in an icon view.
- [touchBarListViewTemplateName](touchbarlistviewtemplatename.md): A template image for showing items in a list view.
- [touchBarMailTemplateName](touchbarmailtemplatename.md): A template image for creating an email message.
- [touchBarNewFolderTemplateName](touchbarnewfoldertemplatename.md): A template image for creating a new folder.
- [touchBarNewMessageTemplateName](touchbarnewmessagetemplatename.md): A template image for creating a new message, or for denoting the use of messaging.
- [touchBarOpenInBrowserTemplateName](touchbaropeninbrowsertemplatename.md): A template image for opening an item in the user’s browser.
- [touchBarPauseTemplateName](touchbarpausetemplatename.md): A template image for pausing media playback or slides.
- [touchBarPlayPauseTemplateName](touchbarplaypausetemplatename.md): A template image for toggling between playing and pausing media or slides.
- [touchBarPlayTemplateName](touchbarplaytemplatename.md): A template image for starting or resuming playback of media or slides.
- [touchBarPlayheadTemplateName](touchbarplayheadtemplatename.md): A template image for denoting the current playback position within a timeline track.
- [touchBarQuickLookTemplateName](touchbarquicklooktemplatename.md): A template image for opening an item in Quick Look.
- [touchBarRecordStartTemplateName](touchbarrecordstarttemplatename.md): A template image for starting recording.
- [touchBarRecordStopTemplateName](touchbarrecordstoptemplatename.md): A template image for stopping recording or stopping playback of media or slides.
- [touchBarRefreshTemplateName](touchbarrefreshtemplatename.md): A template image for refreshing displayed data.
- [touchBarRemoveTemplateName](touchbarremovetemplatename.md): A template image for removing an item.
- [touchBarRewindTemplateName](touchbarrewindtemplatename.md): A template image for moving backwards through media or slides.
- [touchBarRotateLeftTemplateName](touchbarrotatelefttemplatename.md): A template image for rotating an item counterclockwise.
- [touchBarRotateRightTemplateName](touchbarrotaterighttemplatename.md): A template image for rotating an item clockwise.
- [touchBarSearchTemplateName](touchbarsearchtemplatename.md): A template image for showing a search field or for initiating a search.
- [touchBarShareTemplateName](touchbarsharetemplatename.md): A template image for sharing content with others directly or via social media.
- [touchBarSidebarTemplateName](touchbarsidebartemplatename.md): A template image for showing a sidebar in the current view.
- [touchBarSkipAhead15SecondsTemplateName](touchbarskipahead15secondstemplatename.md): A template image for skipping ahead 15 seconds during media playback.
- [touchBarSkipAhead30SecondsTemplateName](touchbarskipahead30secondstemplatename.md): A template image for skipping ahead 30 seconds during media playback.
- [touchBarSkipAheadTemplateName](touchbarskipaheadtemplatename.md): A template image for skipping to the next chapter or location during media playback.
- [touchBarSkipBack15SecondsTemplateName](touchbarskipback15secondstemplatename.md): A template image for skipping back 15 seconds during media playback.
- [touchBarSkipBack30SecondsTemplateName](touchbarskipback30secondstemplatename.md): A template image for skipping back 30 seconds during media playback.
- [touchBarSkipBackTemplateName](touchbarskipbacktemplatename.md): A template image for skipping to the previous chapter or location during media playback.
- [touchBarSkipToEndTemplateName](touchbarskiptoendtemplatename.md): A template image for skipping to the end of media playback.
- [touchBarSkipToStartTemplateName](touchbarskiptostarttemplatename.md): A template image for skipping to the start of media playback.
- [touchBarSlideshowTemplateName](touchbarslideshowtemplatename.md): A template image for starting a slideshow.
- [touchBarTagIconTemplateName](touchbartagicontemplatename.md): A template image for applying a tag to an item.
- [touchBarTextBoldTemplateName](touchbartextboldtemplatename.md): A template image for making selected text bold.
- [touchBarTextBoxTemplateName](touchbartextboxtemplatename.md): A template image for inserting a text box.
- [touchBarTextCenterAlignTemplateName](touchbartextcenteraligntemplatename.md): A template image for centering text.
- [touchBarTextItalicTemplateName](touchbartextitalictemplatename.md): A template image for italicizing the selected text.
- [touchBarTextJustifiedAlignTemplateName](touchbartextjustifiedaligntemplatename.md): A template image for fully justifying text.
- [touchBarTextLeftAlignTemplateName](touchbartextleftaligntemplatename.md): A template image for aligning text to the left.
- [touchBarTextListTemplateName](touchbartextlisttemplatename.md): A template image for inserting a list or converting text to list form.
- [touchBarTextRightAlignTemplateName](touchbartextrightaligntemplatename.md): A template image for aligning text to the right.
- [touchBarTextStrikethroughTemplateName](touchbartextstrikethroughtemplatename.md): A template image for striking through text.
- [touchBarTextUnderlineTemplateName](touchbartextunderlinetemplatename.md): A template image for underlining text.
- [touchBarUserAddTemplateName](touchbaruseraddtemplatename.md): A template image for creating a new user account.
- [touchBarUserGroupTemplateName](touchbarusergrouptemplatename.md): A template image for showing or representing a group of users.
- [touchBarUserTemplateName](touchbarusertemplatename.md): A template image for showing or representing user information.
- [touchBarVolumeDownTemplateName](touchbarvolumedowntemplatename.md): A template image for reducing the audio output volume.
- [touchBarVolumeUpTemplateName](touchbarvolumeuptemplatename.md): A template image for increasing the audio output volume.
- [trashEmptyName](trashemptyname.md): An image of the empty trash can.
- [trashFullName](trashfullname.md): An image of the full trash can.
- [userName](username.md): Permissions for a single user.
- [userAccountsName](useraccountsname.md): User account toolbar icon for the preferences window.
- [userGroupName](usergroupname.md): Permissions for a group of users.
- [userGuestName](userguestname.md): Permissions for guests.

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [init(named:)](init%28named_%29.md): Returns the image object associated with the specified name.
- [init(systemSymbolName:accessibilityDescription:)](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [init(systemSymbolName:variableValue:accessibilityDescription:)](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [init(symbolName:variableValue:)](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [init(symbolName:bundle:variableValue:)](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [init(resource:)](init%28resource_%29.md): Initialize a `NSImage` with an image resource.
- [setName(\_:)](setname%28__%29.md): Registers the image object under the specified name.
- [name()](name%28%29.md): Returns the name associated with the image, if any.
- [init(imageLiteralResourceName:)](init%28imageliteralresourcename_%29.md): Creates an image initialized with the specified resource name.

# NSImageName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS

Named images, defined by the system or you, for use in your app.

## Declaration

```objectivec
typedef NSString * NSImageName;
```

<a id="Discussion"></a>

## Discussion

The appearance of system-supplied images can change between releases. If you use an image for its intended purpose (and not because of how it looks), your code should look correct from release to release.

The size and aspect ratio of system images can also change between releases. In some situations, you should explicitly resize images as appropriate for your use. If you use these images in conjunction with an [NSButtonCell](../nsbuttoncell.md) object, however, you can use the [imageScaling](../nsbuttoncell/imagescaling.md) property of the cell to control scaling instead. Similarly, for an [NSSegmentedCell](../nssegmentedcell.md) object, you can use the [setImageScaling:forSegment:](../nssegmentedcell/setimagescaling%28__forsegment_%29.md): method to control scaling.

Constants that end in the word “Template” represent template images. These images can be processed into variants appropriate for different situations.  For example, these images can invert in a selected table view row. See [template](istemplate.md) for more information.

Some images also contain the word “FreestandingTemplate”.  These images are template images that are appropriate for use as a borderless button—that is, it doesn’t need any extra bezel artwork behind it.

## Topics

### System Images

- [NSImageNameActionTemplate](actiontemplatename.md): An action menu template image.
- [NSImageNameAddTemplate](addtemplatename.md): An add item template image.
- [NSImageNameAdvanced](advancedname.md): Advanced preferences toolbar icon for the preferences window.
- [NSImageNameApplicationIcon](applicationiconname.md): The app’s icon.
- [NSImageNameBluetoothTemplate](bluetoothtemplatename.md): A Bluetooth template image.
- [NSImageNameBonjour](bonjourname.md): A Bonjour icon.
- [NSImageNameBookmarksTemplate](bookmarkstemplatename.md): Bookmarks image suitable for a template.
- [NSImageNameCaution](cautionname.md): A caution image.
- [NSImageNameColorPanel](colorpanelname.md): A color panel toolbar icon.
- [NSImageNameColumnViewTemplate](columnviewtemplatename.md): A column view mode template image.
- [NSImageNameComputer](computername.md): A computer icon.
- [NSImageNameDotMac](../nsimagenamedotmac.md): Deprecated. A Dot Mac icon.
- [NSImageNameEnterFullScreenTemplate](enterfullscreentemplatename.md): An enter full-screen mode template image.
- [NSImageNameEveryone](everyonename.md): Permissions for all users.
- [NSImageNameExitFullScreenTemplate](exitfullscreentemplatename.md): An exit full-screen mode template image.
- [NSImageNameFlowViewTemplate](flowviewtemplatename.md): A cover flow view mode template image.
- [NSImageNameFolder](foldername.md): A folder image.
- [NSImageNameFolderBurnable](folderburnablename.md): A burnable folder icon.
- [NSImageNameFolderSmart](foldersmartname.md): A smart folder icon.
- [NSImageNameFollowLinkFreestandingTemplate](followlinkfreestandingtemplatename.md): A link template image.
- [NSImageNameFontPanel](fontpanelname.md): A font panel toolbar icon.
- [NSImageNameGoBackTemplate](gobacktemplatename.md): A “go back” template image.
- [NSImageNameGoForwardTemplate](goforwardtemplatename.md): A “go forward” template image.
- [NSImageNameGoLeftTemplate](golefttemplatename.md): A “go back” template image.
- [NSImageNameGoRightTemplate](gorighttemplatename.md): A “go forward” template image.
- [NSImageNameHomeTemplate](hometemplatename.md): Home image suitable for a template.
- [NSImageNameIChatTheaterTemplate](ichattheatertemplatename.md): An iChat Theater template image.
- [NSImageNameIconViewTemplate](iconviewtemplatename.md): An icon view mode template image.
- [NSImageNameInfo](infoname.md): An information toolbar icon.
- [NSImageNameInvalidDataFreestandingTemplate](invaliddatafreestandingtemplatename.md): A template image used to denote invalid data.
- [NSImageNameLeftFacingTriangleTemplate](leftfacingtriangletemplatename.md): A generic left-facing triangle template image.
- [NSImageNameListViewTemplate](listviewtemplatename.md): A list view mode template image.
- [NSImageNameLockLockedTemplate](locklockedtemplatename.md): A locked padlock template image.
- [NSImageNameLockUnlockedTemplate](lockunlockedtemplatename.md): An unlocked padlock template image.
- [NSImageNameMenuMixedStateTemplate](menumixedstatetemplatename.md): A horizontal dash, for use in menus.
- [NSImageNameMenuOnStateTemplate](menuonstatetemplatename.md): A check mark template image, for use in menus.
- [NSImageNameMobileMe](mobilemename.md): A MobileMe icon.
- [NSImageNameMultipleDocuments](multipledocumentsname.md): A drag image for multiple items.
- [NSImageNameNetwork](networkname.md): A network icon.
- [NSImageNamePathTemplate](pathtemplatename.md): A path button template image.
- [NSImageNamePreferencesGeneral](preferencesgeneralname.md): General preferences toolbar icon for the preferences window.
- [NSImageNameQuickLookTemplate](quicklooktemplatename.md): A Quick Look template image.
- [NSImageNameRefreshFreestandingTemplate](refreshfreestandingtemplatename.md): A refresh template image.
- [NSImageNameRefreshTemplate](refreshtemplatename.md): A refresh template image.
- [NSImageNameRemoveTemplate](removetemplatename.md): A remove item template image.
- [NSImageNameRevealFreestandingTemplate](revealfreestandingtemplatename.md): A reveal contents template image.
- [NSImageNameRightFacingTriangleTemplate](rightfacingtriangletemplatename.md): A generic right-facing triangle template image.
- [NSImageNameShareTemplate](sharetemplatename.md): A share view template image.
- [NSImageNameSlideshowTemplate](slideshowtemplatename.md): A slideshow template image.
- [NSImageNameSmartBadgeTemplate](smartbadgetemplatename.md): A badge for a “smart” item.
- [NSImageNameStatusAvailable](statusavailablename.md): Small green indicator, similar to iChat’s available image.
- [NSImageNameStatusNone](statusnonename.md): Small clear indicator.
- [NSImageNameStatusPartiallyAvailable](statuspartiallyavailablename.md): Small yellow indicator, similar to iChat’s idle image.
- [NSImageNameStatusUnavailable](statusunavailablename.md): Small red indicator, similar to iChat’s unavailable image.
- [NSImageNameStopProgressFreestandingTemplate](stopprogressfreestandingtemplatename.md): A stop progress template image.
- [NSImageNameStopProgressTemplate](stopprogresstemplatename.md): A stop progress button template image.
- [NSImageNameTouchBarAddDetailTemplate](touchbaradddetailtemplatename.md): A template image for showing additional detail for an item.
- [NSImageNameTouchBarAddTemplate](touchbaraddtemplatename.md): A template image for creating a new item.
- [NSImageNameTouchBarAlarmTemplate](touchbaralarmtemplatename.md): A template image for setting or showing an alarm.
- [NSImageNameTouchBarAudioInputMuteTemplate](touchbaraudioinputmutetemplatename.md): A template image for muting audio input or denoting that audio input is muted.
- [NSImageNameTouchBarAudioInputTemplate](touchbaraudioinputtemplatename.md): A template image for denoting audio input.
- [NSImageNameTouchBarAudioOutputMuteTemplate](touchbaraudiooutputmutetemplatename.md): A template image for muting audio output or for denoting that audio output is muted.
- [NSImageNameTouchBarAudioOutputVolumeHighTemplate](touchbaraudiooutputvolumehightemplatename.md): A template image for setting the audio output volume to a high level, or for denoting that the audio is at the peak volume.
- [NSImageNameTouchBarAudioOutputVolumeLowTemplate](touchbaraudiooutputvolumelowtemplatename.md): A template image for setting the audio output volume to a low level, or for denoting that it is set to a low level.
- [NSImageNameTouchBarAudioOutputVolumeMediumTemplate](touchbaraudiooutputvolumemediumtemplatename.md): A template image for setting the audio output volume to a medium level, or for denoting that it is set to a medium level.
- [NSImageNameTouchBarAudioOutputVolumeOffTemplate](touchbaraudiooutputvolumeofftemplatename.md): A template image for setting the audio output volume to silent, or for denoting that it is set to silent.
- [NSImageNameTouchBarBookmarksTemplate](touchbarbookmarkstemplatename.md): A template image for showing app-specific bookmarks.
- [NSImageNameTouchBarColorPickerFill](touchbarcolorpickerfillname.md): A template image for showing a color picker so the user can select a fill color.
- [NSImageNameTouchBarColorPickerFont](touchbarcolorpickerfontname.md): A template image for showing a color picker so the user can select a text color.
- [NSImageNameTouchBarColorPickerStroke](touchbarcolorpickerstrokename.md): A template image for showing a color picker so the user can select a stroke color.
- [NSImageNameTouchBarCommunicationAudioTemplate](touchbarcommunicationaudiotemplatename.md): A template image for initiating or denoting audio communication.
- [NSImageNameTouchBarCommunicationVideoTemplate](touchbarcommunicationvideotemplatename.md): A template image for initiating or denoting video communication.
- [NSImageNameTouchBarComposeTemplate](touchbarcomposetemplatename.md): A template image for opening a new document or view in edit mode.
- [NSImageNameTouchBarDeleteTemplate](touchbardeletetemplatename.md): A template image for deleting the current or selected item.
- [NSImageNameTouchBarDownloadTemplate](touchbardownloadtemplatename.md): A template image for downloading an item.
- [NSImageNameTouchBarEnterFullScreenTemplate](touchbarenterfullscreentemplatename.md): A template image for entering full screen mode.
- [NSImageNameTouchBarExitFullScreenTemplate](touchbarexitfullscreentemplatename.md): A template image for exiting full screen mode.
- [NSImageNameTouchBarFastForwardTemplate](touchbarfastforwardtemplatename.md): A template image for moving forward through media playback or slides.
- [NSImageNameTouchBarFolderCopyToTemplate](touchbarfoldercopytotemplatename.md): A template image for copying an item to a destination.
- [NSImageNameTouchBarFolderMoveToTemplate](touchbarfoldermovetotemplatename.md): A template image for moving an item to a destination.
- [NSImageNameTouchBarFolderTemplate](touchbarfoldertemplatename.md): A template image for opening or representing a folder.
- [NSImageNameTouchBarGetInfoTemplate](touchbargetinfotemplatename.md): A template image for showing information about an item.
- [NSImageNameTouchBarGoBackTemplate](touchbargobacktemplatename.md): A template image for returning to the previous screen or location.
- [NSImageNameTouchBarGoDownTemplate](touchbargodowntemplatename.md): A template image for moving to the next item in a list.
- [NSImageNameTouchBarGoForwardTemplate](touchbargoforwardtemplatename.md): A template image for moving to the next screen or location.
- [NSImageNameTouchBarGoUpTemplate](touchbargouptemplatename.md): A template image for moving to the previous item in a list.
- [NSImageNameTouchBarHistoryTemplate](touchbarhistorytemplatename.md): A template image for showing history information, such as recent downloads.
- [NSImageNameTouchBarIconViewTemplate](touchbariconviewtemplatename.md): A template image for showing items in an icon view.
- [NSImageNameTouchBarListViewTemplate](touchbarlistviewtemplatename.md): A template image for showing items in a list view.
- [NSImageNameTouchBarMailTemplate](touchbarmailtemplatename.md): A template image for creating an email message.
- [NSImageNameTouchBarNewFolderTemplate](touchbarnewfoldertemplatename.md): A template image for creating a new folder.
- [NSImageNameTouchBarNewMessageTemplate](touchbarnewmessagetemplatename.md): A template image for creating a new message, or for denoting the use of messaging.
- [NSImageNameTouchBarOpenInBrowserTemplate](touchbaropeninbrowsertemplatename.md): A template image for opening an item in the user’s browser.
- [NSImageNameTouchBarPauseTemplate](touchbarpausetemplatename.md): A template image for pausing media playback or slides.
- [NSImageNameTouchBarPlayPauseTemplate](touchbarplaypausetemplatename.md): A template image for toggling between playing and pausing media or slides.
- [NSImageNameTouchBarPlayTemplate](touchbarplaytemplatename.md): A template image for starting or resuming playback of media or slides.
- [NSImageNameTouchBarPlayheadTemplate](touchbarplayheadtemplatename.md): A template image for denoting the current playback position within a timeline track.
- [NSImageNameTouchBarQuickLookTemplate](touchbarquicklooktemplatename.md): A template image for opening an item in Quick Look.
- [NSImageNameTouchBarRecordStartTemplate](touchbarrecordstarttemplatename.md): A template image for starting recording.
- [NSImageNameTouchBarRecordStopTemplate](touchbarrecordstoptemplatename.md): A template image for stopping recording or stopping playback of media or slides.
- [NSImageNameTouchBarRefreshTemplate](touchbarrefreshtemplatename.md): A template image for refreshing displayed data.
- [NSImageNameTouchBarRemoveTemplate](touchbarremovetemplatename.md): A template image for removing an item.
- [NSImageNameTouchBarRewindTemplate](touchbarrewindtemplatename.md): A template image for moving backwards through media or slides.
- [NSImageNameTouchBarRotateLeftTemplate](touchbarrotatelefttemplatename.md): A template image for rotating an item counterclockwise.
- [NSImageNameTouchBarRotateRightTemplate](touchbarrotaterighttemplatename.md): A template image for rotating an item clockwise.
- [NSImageNameTouchBarSearchTemplate](touchbarsearchtemplatename.md): A template image for showing a search field or for initiating a search.
- [NSImageNameTouchBarShareTemplate](touchbarsharetemplatename.md): A template image for sharing content with others directly or via social media.
- [NSImageNameTouchBarSidebarTemplate](touchbarsidebartemplatename.md): A template image for showing a sidebar in the current view.
- [NSImageNameTouchBarSkipAhead15SecondsTemplate](touchbarskipahead15secondstemplatename.md): A template image for skipping ahead 15 seconds during media playback.
- [NSImageNameTouchBarSkipAhead30SecondsTemplate](touchbarskipahead30secondstemplatename.md): A template image for skipping ahead 30 seconds during media playback.
- [NSImageNameTouchBarSkipAheadTemplate](touchbarskipaheadtemplatename.md): A template image for skipping to the next chapter or location during media playback.
- [NSImageNameTouchBarSkipBack15SecondsTemplate](touchbarskipback15secondstemplatename.md): A template image for skipping back 15 seconds during media playback.
- [NSImageNameTouchBarSkipBack30SecondsTemplate](touchbarskipback30secondstemplatename.md): A template image for skipping back 30 seconds during media playback.
- [NSImageNameTouchBarSkipBackTemplate](touchbarskipbacktemplatename.md): A template image for skipping to the previous chapter or location during media playback.
- [NSImageNameTouchBarSkipToEndTemplate](touchbarskiptoendtemplatename.md): A template image for skipping to the end of media playback.
- [NSImageNameTouchBarSkipToStartTemplate](touchbarskiptostarttemplatename.md): A template image for skipping to the start of media playback.
- [NSImageNameTouchBarSlideshowTemplate](touchbarslideshowtemplatename.md): A template image for starting a slideshow.
- [NSImageNameTouchBarTagIconTemplate](touchbartagicontemplatename.md): A template image for applying a tag to an item.
- [NSImageNameTouchBarTextBoldTemplate](touchbartextboldtemplatename.md): A template image for making selected text bold.
- [NSImageNameTouchBarTextBoxTemplate](touchbartextboxtemplatename.md): A template image for inserting a text box.
- [NSImageNameTouchBarTextCenterAlignTemplate](touchbartextcenteraligntemplatename.md): A template image for centering text.
- [NSImageNameTouchBarTextItalicTemplate](touchbartextitalictemplatename.md): A template image for italicizing the selected text.
- [NSImageNameTouchBarTextJustifiedAlignTemplate](touchbartextjustifiedaligntemplatename.md): A template image for fully justifying text.
- [NSImageNameTouchBarTextLeftAlignTemplate](touchbartextleftaligntemplatename.md): A template image for aligning text to the left.
- [NSImageNameTouchBarTextListTemplate](touchbartextlisttemplatename.md): A template image for inserting a list or converting text to list form.
- [NSImageNameTouchBarTextRightAlignTemplate](touchbartextrightaligntemplatename.md): A template image for aligning text to the right.
- [NSImageNameTouchBarTextStrikethroughTemplate](touchbartextstrikethroughtemplatename.md): A template image for striking through text.
- [NSImageNameTouchBarTextUnderlineTemplate](touchbartextunderlinetemplatename.md): A template image for underlining text.
- [NSImageNameTouchBarUserAddTemplate](touchbaruseraddtemplatename.md): A template image for creating a new user account.
- [NSImageNameTouchBarUserGroupTemplate](touchbarusergrouptemplatename.md): A template image for showing or representing a group of users.
- [NSImageNameTouchBarUserTemplate](touchbarusertemplatename.md): A template image for showing or representing user information.
- [NSImageNameTouchBarVolumeDownTemplate](touchbarvolumedowntemplatename.md): A template image for reducing the audio output volume.
- [NSImageNameTouchBarVolumeUpTemplate](touchbarvolumeuptemplatename.md): A template image for increasing the audio output volume.
- [NSImageNameTrashEmpty](trashemptyname.md): An image of the empty trash can.
- [NSImageNameTrashFull](trashfullname.md): An image of the full trash can.
- [NSImageNameUser](username.md): Permissions for a single user.
- [NSImageNameUserAccounts](useraccountsname.md): User account toolbar icon for the preferences window.
- [NSImageNameUserGroup](usergroupname.md): Permissions for a group of users.
- [NSImageNameUserGuest](userguestname.md): Permissions for guests.

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [imageNamed:](init%28named_%29.md): Returns the image object associated with the specified name.
- [imageWithSystemSymbolName:accessibilityDescription:](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [imageWithSystemSymbolName:variableValue:accessibilityDescription:](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [imageWithSymbolName:variableValue:](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [imageWithSymbolName:bundle:variableValue:](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [setName:](setname%28__%29.md): Registers the image object under the specified name.
- [name](name%28%29.md): Returns the name associated with the image, if any.
