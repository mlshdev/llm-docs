> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/technotes/tn3108-viewing-the-interface-of-your-swift-code](https://developer.apple.com/documentation/technotes/tn3108-viewing-the-interface-of-your-swift-code)

# TN3108: Viewing the interface of your Swift code

**Kind:** Technote

Learn how to navigate to the interface file of a Swift implementation file.

<a id="Overview"></a>

## Overview

Xcode generates an interface file that includes all your source code’s internal and public declarations when using the Assistant editor, the Related Items, or the Navigate menu.

<a id="Using-the-assistant-editor"></a>

## Using the assistant editor

1. In the project navigator, select your implementation file.
2. Choose Editor \> Assistant.

The generated interface for your Swift code appears in the assistant editor on the right. ![View the interface file in Counterparts mode.](https://developer.apple.com/images/com.apple.technotes/tn3108-counterparts_grouping@2x.png)

<a id="Using-the-Related-Items-button"></a>

## Using the Related Items button

1. In the project navigator, select your implementation file.
2. Click the Related Items icon in the [editor](https://help.apple.com/xcode/mac/current/#/dev79c94bf05)’s jump bar.
3. In the menu that appears, choose Counterparts \> \[Filename\] to view your interface file. ![choose Counterparts \> Filename to view the interface file.](https://developer.apple.com/images/com.apple.technotes/tn3108-select_counterparts_filename@2x.png)

Alternatively, choose Generated Interface \> \[Filename\] from the menu.

To navigate back to your implementation file, choose Original Source from the menu. ![choose Original Source to navigate back to the implementation file.](https://developer.apple.com/images/com.apple.technotes/tn3108-related_original_source@2x.png)

<a id="Using-the-Navigate-menu"></a>

## Using the Navigate menu

In the project navigator, select your implementation file, then choose Navigate \> Jump to Next Counterpart to view the interface file. ![Choose Jump to Next Counterpart to view the interface file.](https://developer.apple.com/images/com.apple.technotes/tn3108-jump_next_counterpart@2x.png)

To navigate back to your implementation file, choose Navigate \> Jump to Previous Counterpart or Navigate \> Jump to Original Source \[Filename\]. ![Choose Navigate \> Jump to Previous Counterpart to navigate back to the implementation file.](https://developer.apple.com/images/com.apple.technotes/tn3108-navigate_original_source@2x.png)

<a id="Revision-History"></a>

## Revision History

- **2022-05-24** Made minor editorial changes.
- **2022-02-08** Republished as TN3108 with significant editorial changes.
- **2016-03-23** First published as QA1914.
