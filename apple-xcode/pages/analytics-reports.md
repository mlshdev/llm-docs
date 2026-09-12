> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/analytics-reports](https://developer.apple.com/documentation/analytics-reports)

# Analytics Reports

A list of app development reports, their field descriptions, and glossaries.

<a id="Overview"></a>

## Overview

Use the Analytics Report API to analyze data about your apps on Apple platforms. This page provides details on downloading reports, report changes, and a list of available reports. You can look at specific reports to read descriptions of report fields, glossaries of values, definitions of key terms, and coverage across platforms.

You can review these reports if you have any of these API key roles:

- `ADMIN`
- `SALES_AND_REPORTS`
- `FINANCE`

> **Note**

> If you share an API key for your developer account with a third party for analyzing or processing your reports, select the SALES_AND_REPORTS role when generating a new key. This role can access to [Download sales and trends reports](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-salesreports) but can’t access [Download finance reports](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-financereports) endpoint.

<a id="Download-and-process-reports"></a>

### Download and process reports

To start receiving reports, use the [Request Reports](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-analyticsreportrequests) endpoint in the App Store Connect API. To learn more, see [Downloading Analytics Reports](https://developer.apple.com/documentation/appstoreconnectapi/downloading-analytics-reports). After you create your request, use [Read Report Request Information](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-analyticsreportrequests-_id_) to poll the list of report instances to check whether new instances are downloadable. Apple does not generate reports until you create a valid Analytics Report Request.

Each report *instance* represents a new set of data. Each instance can consist of multiple *segments*, which are physical partitions of one instance, so you need to download all segments for a given instance to get the complete set of data.

Each report instance has a specific granularity: daily, weekly, or monthly. *Daily* instances may contain data for one day or more days. The Date column in the report content shows the day to which the events relate. *Weekly* instances contain data from Monday to Sunday. *Monthly* instances contain data for a full month. To learn more, see [Data Completeness and Corrections](analytics-reports/data-completeness-corrections.md).

> **Note**

> For weekly and monthly report instances, the `Date` column represents the first day of the week and month, respectively.

<a id="Retrieve-missed-reports"></a>

### Retrieve missed reports

Once you generate a report instance, it’s available for 35 days. After this period, the system automatically deletes report instances. In that event, you are able to initiate a new one-time snapshot request using the [Request reports](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-analyticsreportrequests) endpoint in App Store Connect API to retrieve data that is no longer available in a daily generated report. This request generates a comprehensive data collection of all available historical reports. You can make a single, one-time snapshot request per month.

<a id="Monitor-future-report-changes"></a>

### Monitor future report changes

Report column position might change over time. Rely on column names instead of column positions in the report files to ensure smoother schema upgrades. Report values are not case sensitive.

## Topics

### Essentials

- [Data Completeness and Corrections](analytics-reports/data-completeness-corrections.md): Understand how the Analytics Reports API provides complete data sets.
- [Protecting user privacy in report data](analytics-reports/privacy.md): Understand measures that help protect user privacy.

### App Store Engagement

Engagement information shows how people find, discover, and share your app on the App Store.

- [App Store Discovery and Engagement](analytics-reports/app-store-discovery-and-engagement.md): Analyze how users interact with your app on the App Store.
- [App Store Web Preview](analytics-reports/app-store-web-preview.md): Analyze how people engage with your app’s product pages and in-app events on web browsers.
- [App Store Retention Messaging](analytics-reports/app-store-retention-messaging.md): Analyze how users interact with retention messages during the subscription cancellation flow.

### App Store Commerce

Information about App Store downloads, pre-orders, and purchases.

- [App Store Downloads](analytics-reports/app-download.md): Analyze how many times people download your app on the App Store.
- [App Store Pre-orders](analytics-reports/app-store-pre-order.md): Analyze details on the number of pre-orders that people place and cancel for your app on the App Store.
- [App Store Purchases](analytics-reports/app-store-purchase.md): Analyze total revenue generated by your apps on the App Store.
- [App Store Subscription State](analytics-reports/subscription-state.md): Analyze your App Store subscription performance.
- [App Store Subscription Event](analytics-reports/subscription-event.md): Analyze and track changes throughout your users’ subscription lifecycle.

### App Usage

Usage information helps you understand how people interact with your apps, and includes details about app sessions, installations, and crashes.

- [App Clip Usage](analytics-reports/app-clip-usage.md): Analyze how users engage with your App Clips.
- [App Crashes](analytics-reports/app-crashes.md): Review crashes for your App Store apps based on app version and device type.
- [App Store Installations and Deletions](analytics-reports/app-installs.md): Analyze details on the number of times users install and delete your apps.
- [App Store Opt-in](analytics-reports/app-store-opt-in.md): Analyze the percentage of first-time app downloaders who choose to share their data with you.
- [App Sessions](analytics-reports/app-sessions.md): Analyze how often people open your App Store apps, and the average session duration.
- [CarPlay App Usage](analytics-reports/carplay-app-usage.md): Review how people use CarPlay in your app.
- [Platform App Installs](analytics-reports/platform-app-installs.md): Analyze your app’s install data by date, install type, channel, device, platform version, and territory.
- [Shortcut App Usage](analytics-reports/shortcut-app-usage.md): Analyze how often people use a shortcut action in your app.
- [Shortcuts Actions Usage](analytics-reports/shortcuts-actions-usage.md): Analyze how often people run shortcuts with your app’s actions.

### Framework Usage

Framework usage details help you analyze how people interact with your app and how your app uses APIs.

- [AccessorySetupKit Accessory Picker Sessions](analytics-reports/accessorysetupkit-accessory-picker-sessions.md): Analyze how many people use your app to set up accessories by using AccessorySetupKit.
- [AccessorySetupKit Usage](analytics-reports/accessorysetupkit-usage.md): Analyze how often your app uses AccessorySetupKit.
- [AirPlay Discovery Sessions](analytics-reports/airplay-discovery-sessions.md): Review information about AirPlay discovery sessions.
- [Animoji Stickers Sent](analytics-reports/animoji-stickers-sent.md): Analyze how many times people use Memoji stickers in your app.
- [App Added to Focus](analytics-reports/app-added-to-focus.md): Review information about your app’s relationship to Focus modes.
- [App Disk Space Usage](analytics-reports/app-disk-space-usage.md): Analyze your app’s disk space use.
- [App Extended Launch Usage](analytics-reports/app-extended-launch-usage.md): Understand your app’s use of extended launch.
- [App HangTracer Usage](analytics-reports/app-hangtracer-usage.md): Analyze how much time your app spends monitoring foreground UI responsiveness through the HangTracer Framework.
- [App Runtime Usage](analytics-reports/app-runtime-usage.md): Analyze how often your app executes specific symbols of different dynamic libraries.
- [App Sessions Context](analytics-reports/app-sessions-context.md): Analyze how many people use your app and for how long.
- [Application Preferred Language Settings](analytics-reports/application-preferred-language-settings.md): Review how people use language preference settings in your app.
- [ARKit ARSession Duration](analytics-reports/arkit-arsession-duration.md): Review information about ARKit ARSession duration.
- [ARKit ARSession Failures](analytics-reports/arkit-arsession-failures.md): Analyze details about ARKit ARSession failures.
- [ARKit Capture Frame Rate Throttling](analytics-reports/arkit-capture-frame-rate-throttling.md): Analyze how long it takes for ARKit to throttle the camera frame rate.
- [ARKit Collaborative Session Features](analytics-reports/arkit-collaborative-session-features.md): Review how your app uses ARKit collaborative session features.
- [ARKit Face Tracking](analytics-reports/arkit-face-tracking.md): Analyze how often your app uses ARKit face tracking.
- [ARKit Video Formats](analytics-reports/arkit-video-formats.md): Review information about ARKit video formats and high-resolution frames.
- [ARKit World Tracking](analytics-reports/arkit-world-tracking.md): Review the configured settings for world tracking in your app.
- [ARKit World Tracking Image Detection](analytics-reports/arkit-world-tracking-image-detection.md): Analyze the number of images detected in ARKit world tracking.
- [Audio Input Muting](analytics-reports/audio-input-muting.md): Analyze details about audio-input muting and unmuting gestures during a call with conferencing apps.
- [Audio Input Route and Duration and Call Mode](analytics-reports/audio-input-route-and-duration-and-call-mode.md): Review how your app uses audio session inputs.
- [Audio Session Audio Unit Usage](analytics-reports/audio-session-audio-unit-usage.md): Analyze your app’s audio unit use.
- [Audio Volume Levels and Duration](analytics-reports/audio-volume-levels-and-duration.md): Review how your app uses volume and duration for output audio.
- [Automatic Speech Recognition Usage](analytics-reports/automatic-speech-recognition-usage.md): Analyze how often people use dictation or Siri in your app.
- [Bluetooth LE Advertising](analytics-reports/bluetooth-le-advertising.md): Review how your app uses Bluetooth Low Energy (LE) advertising.
- [Bluetooth LE Connection Results](analytics-reports/bluetooth-le-connection-results.md): Analyze how often your app uses Low Energy (LE) connections and the connection results.
- [Bluetooth LE Connections Per App](analytics-reports/bluetooth-le-connections-per-app.md): Analyze the number of completed Bluetooth Low Energy (LE) connections for your app.
- [Bluetooth LE Disconnection Results](analytics-reports/bluetooth-le-disconnection-results.md): Review Low Energy (LE) disconnections for your app.
- [Bluetooth LE Scans](analytics-reports/bluetooth-le-scans.md): Review how your app uses Bluetooth Low Energy (LE) scans.
- [Bluetooth LE Sessions](analytics-reports/bluetooth-le-sessions.md): Analyze how often your app uses Bluetooth Low Energy (LE) connections.
- [Browser Choice Screen Engagement (iOS versions before 18.2)](analytics-reports/browser-choice-screen-engagement.md): Measure how often your web browser app is being selected as the default from the browser choice screen on iOS.
- [Browser Choice Screen Selection](analytics-reports/browser-choice-screen-selection.md): This report details percentage of devices that had your web browser application selected as default from the Browser Choice screen.
- [Call Services and Call Performance](analytics-reports/call-services-and-call-performance.md): Review your app’s use of call services and call performance.
- [CarPlay Navigation](analytics-reports/carplay-navigation.md): Analyze how often people start route-guidance sessions in your app.
- [Collaboration Message Usage](analytics-reports/collaboration-message-usage.md): Analyze how often people use collaboration messages in your app.
- [Core Location Authorization Results](analytics-reports/core-location-authorization-results.md): Review authorizations that people grant as a result of requests from your app.
- [Core Location Geofencing](analytics-reports/core-location-geofencing.md): Review how your app uses geo fences.
- [CRABS-Based Video Playback Usage](analytics-reports/crabs-based-video-playback-usage.md): Analyze how often your app uses CRABS video playback or video playback that uses the CRABS protocol.
- [Custom Language Model Builds Started](analytics-reports/custom-language-model-builds-started.md): Analyze how often your app triggers a rebuild of custom language models.
- [Customized Transcription Requests](analytics-reports/customized-transcription-requests.md): Analyze transcription request use of custom language models.
- [Default Browser Usage Rate](analytics-reports/default-browser-usage-rate.md): Review percentage of devices where your browser app is set as the default web browser.
- [DockKit App Usage](analytics-reports/dockkit-app-usage.md): Review how your application uses DockKit accessories.
- [Dynamic Island Layout Changes](analytics-reports/dynamic-island-layout-changes.md): Analyze changes in Dynamic Island layout state.
- [Face-Driven Auto Exposure and Auto Focus Usage](analytics-reports/face-driven-auto-exposure-and-auto-focus-usage.md): Analyze how people use face-driven auto exposure (AE) and auto focus (AF) in your app.
- [File-Based Video Playback Usage](analytics-reports/file-based-video-playback-usage.md): Analyze how often your app uses file playback or playback that occurs on the local file system.
- [File-System Events API Usage](analytics-reports/file-system-events-api-usage.md): Analyze how many file-system events resources your app uses.
- [Flashlight Usage](analytics-reports/flashlight-usage.md): Review information about flashlight state.
- [Game Controller Haptics Engine Creation](analytics-reports/game-controller-haptics-engine-creation.md): Analyze how your app uses haptic localities and which controllers it uses.
- [Game Controller Sessions](analytics-reports/game-controller-sessions.md): Analyze how often and how long people are in game-controller sessions in your app.
- [Haptics Engine Usage](analytics-reports/haptics-engine-usage.md): Review how often your app plays haptics.
- [Home Screen Widget Installs](analytics-reports/home-screen-widget-installs.md): Analyze how often people add your widget to their Home Screens.
- [Home Screen Widget Rotations](analytics-reports/home-screen-widget-rotations.md): Analyze how often your app’s widget rotates to the front of a Smart Stack.
- [Home Screen Widget Usage](analytics-reports/home-screen-widget-usage.md): Analyze how many people are interacting with your Widget.
- [Home Screen Widgets](analytics-reports/home-screen-widgets.md): Analyze when the system adds your app widget to a default Smart Stack on the Home Screen.
- [HTTP Live Streaming Playback Count](analytics-reports/http-live-streaming-playback-count.md): Review your app’s use of HTTP Live Streaming (HLS) assets in AVFoundation APIs.
- [HTTP Live Streaming Video Playback Usage](analytics-reports/http-live-streaming-video-playback-usage.md): Review information about how your app uses HTTP live streaming (HLS) video playback or video playback that uses the HLS protocol.
- [iBeacon Add Region Usage](analytics-reports/ibeacon-add-region-usage.md): Analyze how your app uses the iBeacon Add Region API.
- [iBeacon Ranging Usage](analytics-reports/ibeacon-ranging-usage.md): Review information about how your app uses the iBeacon Ranging API.
- [iBeacon Stop Monitoring for Region Usage](analytics-reports/ibeacon-stop-monitoring-for-region-usage.md): Analyze how frequently your app uses the iBeacon Stop Monitoring for Region API.
- [Keyboard Dictation Usage](analytics-reports/keyboard-dictation-usage.md): Analyze how people use keyboard dictation in your app.
- [Live Activity Use](analytics-reports/live-activity-use.md): Review how your app uses Live Activity.
- [Load CoreML Models Metrics](analytics-reports/load-coreml-models-metrics.md): Review your app’s use of Core ML models.
- [Local Network Privacy](analytics-reports/local-network-privacy.md): Analyze results of the Local Network Privacy prompt.
- [Location Sessions](analytics-reports/location-sessions.md): Review how your app uses Core Location APIs.
- [Lock Screen Widget Configuration](analytics-reports/lock-screen-widget-configuration.md): Analyze how often people configure your widgets on the Lock Screen.
- [Metal Command Queues](analytics-reports/metal-command-queues.md): Review your app’s use of Metal Command Queues.
- [Mode Activity Notifications](analytics-reports/mode-activity-notifications.md): Review information about how users resolve notifications in your app.
- [Multiple Game Controllers Usage](analytics-reports/multiple-game-controllers-usage.md): Review how people using your app use multiple game controllers.
- [Nearby Interaction Sessions](analytics-reports/nearby-interaction-sessions.md): Analyze how often your app starts an Ultra Wideband (UWB) ranging session through Nearby Interaction.
- [Notification Summary Engagement](analytics-reports/notification-summary-engagement.md): Analyze how often people engage with notification summaries in your app.
- [Photo Capture Usage](analytics-reports/photo-capture-usage.md): Analyze how your app uses Photo capture in photos.
- [Photogrammetry ObjectCaptureSession API Usage](analytics-reports/photogrammetry-objectcapturesession-api-usage.md): Review how often your app uses object capture for photogrammetry.
- [PhotogrammetrySession API Usage](analytics-reports/photogrammetrysession-api-usage.md): Review how often your app uses object modeling for photogrammetry.
- [PhotoKit Imports](analytics-reports/photokit-imports.md): Review how your app imports PhotoKit assets.
- [Photos Library Access](analytics-reports/photos-library-access.md): Review what type of Photos Library Access people grant in your app.
- [Photos Picker](analytics-reports/photos-picker.md): Analyze how people use Photos in your app.
- [Photos Sharing](analytics-reports/photos-sharing.md): Analyze how often people share Photos in your app.
- [ProRes Video Usage](analytics-reports/prores-video-usage.md): Review how people use ProRes videos in your app.
- [Reminders Usage](analytics-reports/reminders-usage.md): Analyze how often your app interacts with system reminders.
- [RoomPlan Usage](analytics-reports/roomplan-usage.md): Review how people use RoomPlan in your app.
- [Safari Extensions Enablement](analytics-reports/safari-extensions-enablement.md): Analyze how often people enable your Safari extension.
- [Safari Extensions Usage](analytics-reports/safari-extensions-usage.md): Review how people use your Safari extension.
- [Shared With You Content Engagement](analytics-reports/shared-with-you-content-engagement.md): Review information about people engaging with Shared with You content in your app.
- [SharePlay Usage by Activity Type](analytics-reports/shareplay-usage-by-activity-type.md): Review how people use SharePlay in your app.
- [ShazamKit Usage](analytics-reports/shazamkit-usage.md): Analyze how your app utilizes ShazamKit.
- [Spatial Audio Usage](analytics-reports/spatial-audio-usage.md): Analyze changes in spatial audio modes.
- [Speech Framework Transcription Request Audio Duration](analytics-reports/speech-framework-transcription-request-audio-duration.md): Analyze the distribution of audio duration for transcription requests in your app.
- [Speech Framework Transcription Requests](analytics-reports/speech-framework-transcription-requests.md): Review transcription requests in your app.
- [Text-Input Actions](analytics-reports/text-input-actions.md): Review information on text-input actions.
- [Translation Request Usage](analytics-reports/translation-request-usage.md): Review information about how people use speech-to-text translation in your app.
- [Verify With Wallet Document Request Availability](analytics-reports/verify-with-wallet-document-request-availability.md): Review how your app uses identity and authorization APIs to check document request availability
- [Verify with Wallet Document Requests](analytics-reports/verify-with-wallet-document-requests.md): Review how your app uses identity and authorization APIs.
- [Video Duration Information](analytics-reports/video-duration-information.md): Review information about video duration.
- [Video PiP Duration](analytics-reports/video-pip-duration.md): Review the duration of time your app uses Picture in Picture (PiP).
- [Video Streaming Duration](analytics-reports/video-streaming-duration.md): Review how people use video streaming in your app.
- [VisionKit Data Detectors](analytics-reports/visionkit-data-detectors.md): Review your app’s use of data detector invocation for VisionKit.
- [VisionKit Image Analysis](analytics-reports/visionkit-image-analysis.md): Analyze VisionKit analysis requests on images.
- [VisionKit Live Text Usage](analytics-reports/visionkit-live-text-usage.md): Review information about how people interact with Live Text.
- [VisionKit Sessions](analytics-reports/visionkit-sessions.md): Review VisionKit sessions in your app.
- [Wi-Fi Known Network Modifications](analytics-reports/wi-fi-known-network-modifications.md): Analyze details about people adding and removing known networks by using Wi-Fi manager in your app.

### Performance

Performance metrics show how your app performs and how users interact with specific features.

- [AirPlay Errors](analytics-reports/airplay-errors.md): Analyze AirPlay errors in your apps.
- [AirPlay Performance](analytics-reports/airplay-performance.md): Review AirPlay performance in your apps.
- [App Crashes Expanded](analytics-reports/app-crashes-expanded.md): Analyze the rate at which your app crashes.
- [App Installs Performance](analytics-reports/app-installs-performance.md): Analyze details about installation success and failure rates for your apps.
- [App Neural Footprint](analytics-reports/app-neural-footprint.md): Analyze how much memory your process induces the Apple Neural Engine to wire down on your process’s behalf.
- [App Storage Reads and Writes](analytics-reports/app-storage-reads-and-writes.md): Analyze how often your app uses disk reads and writes.
- [Audio Overloads](analytics-reports/audio-overloads.md): Analyze how many audio glitches people experience in your app.
- [Bluetooth LE Session Duration](analytics-reports/bluetooth-le-session-duration.md): Analyze how long your app uses Bluetooth Low Energy (LE) connections.
- [Bluetooth System Wakes](analytics-reports/bluetooth-system-wakes.md): Analyze details about bluetooth system wakes that your app causes.
- [CAMetalLayer Performance](analytics-reports/cametallayer-performance.md): Review CAMetalLayer metadata and performance in your app.
- [Cellular Plan Provisioning](analytics-reports/cellular-plan-provisioning.md): Analyze how often people use your app for eSim install and the success rate.
- [Custom Language Model Builds Failed](analytics-reports/custom-language-model-builds-failed.md): Analyze how often your app-triggered rebuild of a custom language model failed.
- [Display Power Information](analytics-reports/display-power-information.md): Review your app’s impact on display pixel attributes.
- [Embedding Generation](analytics-reports/embedding-generation.md): Analyze details about embedding generation throughput in your app.
- [HTTP Live Streaming Playback Errors](analytics-reports/http-live-streaming-playback-errors.md): Analyze playback errors that your app receives.
- [Launch Image Over Memory Limit](analytics-reports/launch-image-over-memory-limit.md): Analyze how often your app fails to load because it’s over the memory limit.
- [Media Device Extension Errors](analytics-reports/media-device-extension-errors.md): Analyze Media Device Extension errors in your apps.
- [Media Device Extension Performance](analytics-reports/media-device-extension-performance.md): Review Media Device Extension performance in your apps.
- [Networking Connection Activity](analytics-reports/networking-connection-activity.md): Review how your app uses network connections.
- [Spotlight Query Performance](analytics-reports/spotlight-query-performance.md): Review how your app uses Spotlight queries.
- [Streaming Downloads Performance](analytics-reports/streaming-downloads-performance.md): Review download performance when using the AVAssetDownloadTask APIs in your apps.
- [Streaming Playback Performance](analytics-reports/streaming-playback-performance.md): Review playback performance when using the AVPlayerItem APIs in your apps.
