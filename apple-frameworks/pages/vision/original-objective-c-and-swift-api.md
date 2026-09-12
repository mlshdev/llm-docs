> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/original-objective-c-and-swift-api](https://developer.apple.com/documentation/vision/original-objective-c-and-swift-api)

# Original Objective-C and Swift API (Swift)

**Framework:** Vision  
**Kind:** API Collection

## Topics

### Essentials

- [Building a feature-rich app for sports analysis](building-a-feature-rich-app-for-sports-analysis.md): Detect and classify human activity in real time using computer vision and machine learning.

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [Classifying images for categorization and search](classifying-images-for-categorization-and-search.md): Analyze and label images using a Vision classification request.
- [Analyzing Image Similarity with Feature Print](analyzing-image-similarity-with-feature-print.md): Generate a feature print to compute distance between images.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Detecting human actions in a live video feed](../createml/detecting-human-actions-in-a-live-video-feed.md): Identify body movements by sending a person’s pose data from a series of video frames to an action-classification model.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNStatefulRequest](vnstatefulrequest.md): An abstract request type that builds evidence of a condition over time.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.

### Image aesthetics analysis

- [VNCalculateImageAestheticsScoresRequest](vncalculateimageaestheticsscoresrequest.md): An object that analyzes an image for aesthetically pleasing attributes.

### Saliency analysis

- [Cropping Images Using Saliency](cropping-images-using-saliency.md): Isolate regions in an image that are most likely to draw people’s attention.
- [Highlighting Areas of Interest in an Image Using Saliency](highlighting-areas-of-interest-in-an-image-using-saliency.md): Quantify and visualize where people are likely to look in an image.
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md): A request that generates a heat map that identifies the parts of an image most likely to represent objects.
- [VNSaliencyImageObservation](vnsaliencyimageobservation.md): An observation that contains a grayscale heat map of important areas across an image.

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackingRequest](vntrackingrequest.md): The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.

### Rectangle detection

- [VNDetectRectanglesRequest](vndetectrectanglesrequest.md): An image-analysis request that finds projected rectangular regions in an image.

### Face and body detection

- [Selecting a selfie based on capture quality](selecting-a-selfie-based-on-capture-quality.md): Compare face-capture quality in a set of images by using Vision.
- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservation.JointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservation.JointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.

### Animal detection

- [VNRecognizeAnimalsRequest](vnrecognizeanimalsrequest.md): A request that recognizes animals in an image.

### Animal body pose detection

- [Detecting animal body poses with Vision](detecting-animal-body-poses-with-vision.md): Draw the skeleton of an animal by using Vision’s capability to detect animal body poses.
- [VNDetectAnimalBodyPoseRequest](vndetectanimalbodyposerequest.md): A request that detects an animal body pose.
- [VNAnimalBodyPoseObservation](vnanimalbodyposeobservation.md): An observation that provides the animal body points the analysis recognizes.

### Trajectory detection

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md): Gain new insights into your video data by using Vision to detect trajectories.
- [Detecting moving objects in a video](detecting-moving-objects-in-a-video.md): Identify the trajectory of a thrown object by using Vision.
- [VNDetectTrajectoriesRequest](vndetecttrajectoriesrequest.md): A request that detects the trajectories of shapes moving along a parabolic path.

### Contour detection

- [VNDetectContoursRequest](vndetectcontoursrequest.md): A request that detects the contours of the edges of an image.

### Optical flow

- [VNGenerateOpticalFlowRequest](vngenerateopticalflowrequest.md): An object that generates directional change vectors for each pixel in the targeted image.
- [VNTrackOpticalFlowRequest](vntrackopticalflowrequest.md): An object that determines the direction change of vectors for each pixel from a previous to current image.

### Barcode detection

- [VNDetectBarcodesRequest](vndetectbarcodesrequest.md): A request that detects barcodes in an image.
- [VNBarcodeCompositeType](vnbarcodecompositetype.md): Composite types for barcode requests.

### Text detection

- [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md): An image-analysis request that finds regions of visible text in an image.
- [VNTextObservation](vntextobservation.md): Information about regions of text that an image-analysis request detects.

### Text recognition

- [Recognizing Text in Images](recognizing-text-in-images.md): Add text-recognition features to your app using the Vision framework.
- [Structuring recognized text on a document](../visionkit/structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [Extracting phone numbers from text in images](extracting-phone-numbers-from-text-in-images.md): Analyze and filter phone numbers from text in live capture by using Vision.
- [Locating and displaying recognized text](locating-and-displaying-recognized-text.md): Perform text recognition on a photo using the Vision framework’s text-recognition request.
- [VNRecognizeTextRequest](vnrecognizetextrequest.md): An image-analysis request that finds and recognizes text in an image.
- [VNRecognizedTextObservation](vnrecognizedtextobservation.md): A request that detects and recognizes regions of text in an image.

### Object recognition

- [Recognizing Objects in Live Capture](recognizing-objects-in-live-capture.md): Apply Vision algorithms to identify objects in real-time video.
- [Understanding a Dice Roll with Vision and Object Detection](../coreml/understanding-a-dice-roll-with-vision-and-object-detection.md): Detect dice position and values shown in a camera frame, and determine the end of a roll by leveraging a dice detection model.
- [VNRecognizedObjectObservation](vnrecognizedobjectobservation.md): A detected object observation with an array of classification labels that classify the recognized object.

### Request progress tracking

- [VNRequestProgressProviding](vnrequestprogressproviding.md): A protocol for providing progress information on long-running tasks in Vision.
- [VNRequestProgressHandler](vnrequestprogresshandler.md): A block executed at intervals during the processing of a Vision request.

### Horizon detection

- [VNDetectHorizonRequest](vndetecthorizonrequest.md): An image-analysis request that determines the horizon angle in an image.
- [VNHorizonObservation](vnhorizonobservation.md): The horizon angle information that an image-analysis request detects.

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

### Image background removal

- [Applying visual effects to foreground subjects](applying-visual-effects-to-foreground-subjects.md): Segment the foreground subjects of an image and composite them to a new background with visual effects.
- [VNInstanceMaskObservation](vninstancemaskobservation.md): An observation that contains an instance mask that labels instances in the mask.
- [VNGenerateForegroundInstanceMaskRequest](vngenerateforegroundinstancemaskrequest.md): A request that generates an instance mask of noticable objects to separate from the background.
- [VNGenerateForegroundInstanceMaskRequestRevision1](vngenerateforegroundinstancemaskrequestrevision1.md): A constant for specifying the first revision of the foreground instance mask request.

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNCoreMLRequest](vncoremlrequest.md): An image-analysis request that uses a Core ML model to process images.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.

### Coordinate conversion

- [VNImagePointForNormalizedPoint(\_:\_:\_:)](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint(\_:\_:\_:)](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect(\_:\_:\_:)](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect(\_:\_:\_:)](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest(\_:\_:\_:\_:)](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect(\_:)](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint(\_:\_:\_:\_:)](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint(\_:\_:\_:\_:)](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

### Common data types

- [VNCircle](vncircle.md): An immutable 2D circle represented by its center point and radius.
- [VNVector](vnvector.md): An immutable 2D vector represented by its x-axis and y-axis projections.

### Errors

- [VNErrorDomain](vnerrordomain.md): The domain of errors that the framework generates.
- [VNErrorCode](vnerrorcode.md): Constants that identify errors from the framework.

### Version and revision numbers

- [VNVisionVersionNumber](vnvisionversionnumber.md): The current version number of the Vision framework.
- [VNDetectAnimalBodyPoseRequestRevision1](vndetectanimalbodyposerequestrevision1.md): A value that indicates the first revision for an animal body-pose request.
- [VNDetectHumanBodyPose3DRequestRevision1](vndetecthumanbodypose3drequestrevision1.md): A value that indicates the first revision for a human 3D body pose request.
- [VNTrackHomographicImageRegistrationRequestRevision1](vntrackhomographicimageregistrationrequestrevision1.md): A value that indicates the first revision for a homographic image-registration request.
- [VNTrackTranslationalImageRegistrationRequestRevision1](vntracktranslationalimageregistrationrequestrevision1.md): A value that indicates the first revision for a translational image-registration request.
- [VNTrackOpticalFlowRequestRevision1](vntrackopticalflowrequestrevision1.md): A value that indicates the first revision for an optial-flow request.
- [VNClassifyImageRequestRevision1](vnclassifyimagerequestrevision1.md): A constant for specifying the first revision of the image-classification request.
- [VNClassifyImageRequestRevision2](vnclassifyimagerequestrevision2.md): A value that indicates the second revision for an image-classification request.
- [VNGenerateObjectnessBasedSaliencyImageRequestRevision2](vngenerateobjectnessbasedsaliencyimagerequestrevision2.md): A value that indicates the second revision for an image-classification request.
- [VNGenerateAttentionBasedSaliencyImageRequestRevision2](vngenerateattentionbasedsaliencyimagerequestrevision2.md): A value that indicates the second revision for an attention-saliency image request.
- [VNGenerateImageFeaturePrintRequestRevision1](vngenerateimagefeatureprintrequestrevision1.md): A constant for specifying the first revision of the feature-print request.
- [VNGenerateImageFeaturePrintRequestRevision2](vngenerateimagefeatureprintrequestrevision2.md): A value that indicates the second revision for a feature-print request.
- [VNDetectFaceCaptureQualityRequestRevision3](vndetectfacecapturequalityrequestrevision3.md): A value that indicates the third revision for a face capture-quality request.
- [VNDetectBarcodesRequestRevision4](vndetectbarcodesrequestrevision4.md): A value that indicates the fourth revision for a barcode request.
- [VNCalculateImageAestheticsScoresRequestRevision1](vncalculateimageaestheticsscoresrequestrevision1.md): A value that indicates the first revision for an aesthetics scores request.
- [VNRequestRevisionUnspecified](vnrequestrevisionunspecified.md): A constant for specifying an unspecified request revision.

### Macros

- [Macros](vision-macros.md)

# Original Objective-C and Swift API (Objective-C)

**Framework:** Vision  
**Kind:** API Collection

## Topics

### Essentials

- [Building a feature-rich app for sports analysis](building-a-feature-rich-app-for-sports-analysis.md): Detect and classify human activity in real time using computer vision and machine learning.

### Still-image analysis

- [Detecting Objects in Still Images](detecting-objects-in-still-images.md): Locate and demarcate rectangles, faces, barcodes, and text in images using the Vision framework.
- [VNRequest](vnrequest.md): The abstract superclass for analysis requests.
- [VNImageBasedRequest](vnimagebasedrequest.md): The abstract superclass for image-analysis requests that focus on a specific part of an image.
- [VNClassifyImageRequest](vnclassifyimagerequest.md): A request to classify an image.
- [VNGenerateImageFeaturePrintRequest](vngenerateimagefeatureprintrequest.md): An image-based request to generate feature prints from an image.
- [VNFeaturePrintObservation](vnfeatureprintobservation.md): An observation that provides the recognized feature print.
- [VNImageRequestHandler](vnimagerequesthandler.md): An object that processes one or more image-analysis request pertaining to a single image.
- [VNObservation](vnobservation.md): The abstract superclass for analysis results.

### Image sequence analysis

- [Applying Matte Effects to People in Images and Video](applying-matte-effects-to-people-in-images-and-video.md): Generate image masks for people automatically by using semantic person-segmentation.
- [Detecting human actions in a live video feed](../createml/detecting-human-actions-in-a-live-video-feed.md): Identify body movements by sending a person’s pose data from a series of video frames to an action-classification model.
- [Segmenting and colorizing individuals from a surrounding scene](segmenting-and-colorizing-individuals-from-a-surrounding-scene.md): Use the Vision framework to isolate and apply colors to people in an image.
- [VNStatefulRequest](vnstatefulrequest.md): An abstract request type that builds evidence of a condition over time.
- [VNGeneratePersonSegmentationRequest](vngeneratepersonsegmentationrequest.md): An object that produces a matte image for a person it finds in the input image.
- [VNGeneratePersonInstanceMaskRequest](vngeneratepersoninstancemaskrequest.md): An object that produces a mask of individual people it finds in the input image.
- [VNDetectDocumentSegmentationRequest](vndetectdocumentsegmentationrequest.md): An object that detects rectangular regions that contain text in the input image.
- [VNSequenceRequestHandler](vnsequencerequesthandler.md): An object that processes image-analysis requests for each frame in a sequence.

### Image aesthetics analysis

- [VNCalculateImageAestheticsScoresRequest](vncalculateimageaestheticsscoresrequest.md): An object that analyzes an image for aesthetically pleasing attributes.

### Saliency analysis

- [Cropping Images Using Saliency](cropping-images-using-saliency.md): Isolate regions in an image that are most likely to draw people’s attention.
- [VNGenerateAttentionBasedSaliencyImageRequest](vngenerateattentionbasedsaliencyimagerequest.md): An object that produces a heat map that identifies the parts of an image most likely to draw attention.
- [VNGenerateObjectnessBasedSaliencyImageRequest](vngenerateobjectnessbasedsaliencyimagerequest.md): A request that generates a heat map that identifies the parts of an image most likely to represent objects.
- [VNSaliencyImageObservation](vnsaliencyimageobservation.md): An observation that contains a grayscale heat map of important areas across an image.

### Object tracking

- [Tracking the User’s Face in Real Time](tracking-the-user-s-face-in-real-time.md): Detect and track faces from the selfie cam feed in real time.
- [Tracking Multiple Objects or Rectangles in Video](tracking-multiple-objects-or-rectangles-in-video.md): Apply Vision algorithms to track objects or rectangles throughout a video.
- [VNTrackingRequest](vntrackingrequest.md): The abstract superclass for image-analysis requests that track unique features across multiple images or video frames.
- [VNTrackRectangleRequest](vntrackrectanglerequest.md): An image-analysis request that tracks movement of a previously identified rectangular object across multiple images or video frames.
- [VNTrackObjectRequest](vntrackobjectrequest.md): An image-analysis request that tracks the movement of a previously identified object across multiple images or video frames.
- [VNDetectedObjectObservation](vndetectedobjectobservation.md): An observation that provides the position and extent of an image feature that an image- analysis request detects.

### Rectangle detection

- [VNDetectRectanglesRequest](vndetectrectanglesrequest.md): An image-analysis request that finds projected rectangular regions in an image.

### Face and body detection

- [VNDetectFaceCaptureQualityRequest](vndetectfacecapturequalityrequest.md): A request that produces a floating-point number that represents the capture quality of a face in a photo.
- [VNDetectFaceLandmarksRequest](vndetectfacelandmarksrequest.md): An image-analysis request that finds facial features like eyes and mouth in an image.
- [VNDetectFaceRectanglesRequest](vndetectfacerectanglesrequest.md): A request that finds faces within an image.
- [VNDetectHumanRectanglesRequest](vndetecthumanrectanglesrequest.md): A request that finds rectangular regions that contain people in an image.
- [VNHumanObservation](vnhumanobservation.md): An object that represents a person that the request detects.

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.

### 3D body pose detection

- [Identifying 3D human body poses in images](identifying-3d-human-body-poses-in-images.md): Detect three-dimensional human body poses using the Vision framework.
- [Detecting human body poses in 3D with Vision](detecting-human-body-poses-in-3d-with-vision.md): Render skeletons of 3D body pose points in a scene overlaying the input image.
- [VNDetectHumanBodyPose3DRequest](vndetecthumanbodypose3drequest.md): A request that detects points on human bodies in 3D space, relative to the camera.
- [VNHumanBodyPose3DObservation](vnhumanbodypose3dobservation.md): An observation that provides the 3D body points the request recognizes.
- [VNRecognizedPoints3DObservation](vnrecognizedpoints3dobservation.md): An observation that provides the 3D points for a request.
- [VNHumanBodyRecognizedPoint3D](vnhumanbodyrecognizedpoint3d.md): A recognized 3D point that includes a parent joint.
- [VNPoint3D](vnpoint3d.md): An object that represents a 3D point in an image.
- [VNRecognizedPoint3D](vnrecognizedpoint3d.md): A 3D point that includes an identifier to the point.
- [VNHumanBodyPose3DObservationJointName](vnhumanbodypose3dobservation/jointname.md): The joint names for a 3D body pose.
- [VNHumanBodyPose3DObservationJointsGroupName](vnhumanbodypose3dobservation/jointsgroupname.md): The joint group names for a 3D body pose.

### Animal detection

- [VNRecognizeAnimalsRequest](vnrecognizeanimalsrequest.md): A request that recognizes animals in an image.

### Animal body pose detection

- [VNDetectAnimalBodyPoseRequest](vndetectanimalbodyposerequest.md): A request that detects an animal body pose.
- [VNAnimalBodyPoseObservation](vnanimalbodyposeobservation.md): An observation that provides the animal body points the analysis recognizes.

### Trajectory detection

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md): Gain new insights into your video data by using Vision to detect trajectories.
- [Detecting moving objects in a video](detecting-moving-objects-in-a-video.md): Identify the trajectory of a thrown object by using Vision.
- [VNDetectTrajectoriesRequest](vndetecttrajectoriesrequest.md): A request that detects the trajectories of shapes moving along a parabolic path.

### Contour detection

- [VNDetectContoursRequest](vndetectcontoursrequest.md): A request that detects the contours of the edges of an image.

### Optical flow

- [VNGenerateOpticalFlowRequest](vngenerateopticalflowrequest.md): An object that generates directional change vectors for each pixel in the targeted image.
- [VNTrackOpticalFlowRequest](vntrackopticalflowrequest.md): An object that determines the direction change of vectors for each pixel from a previous to current image.

### Barcode detection

- [VNDetectBarcodesRequest](vndetectbarcodesrequest.md): A request that detects barcodes in an image.
- [VNBarcodeCompositeType](vnbarcodecompositetype.md): Composite types for barcode requests.

### Text detection

- [VNDetectTextRectanglesRequest](vndetecttextrectanglesrequest.md): An image-analysis request that finds regions of visible text in an image.
- [VNTextObservation](vntextobservation.md): Information about regions of text that an image-analysis request detects.

### Text recognition

- [Recognizing Text in Images](recognizing-text-in-images.md): Add text-recognition features to your app using the Vision framework.
- [Structuring recognized text on a document](../visionkit/structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNRecognizeTextRequest](vnrecognizetextrequest.md): An image-analysis request that finds and recognizes text in an image.
- [VNRecognizedTextObservation](vnrecognizedtextobservation.md): A request that detects and recognizes regions of text in an image.

### Object recognition

- [Recognizing Objects in Live Capture](recognizing-objects-in-live-capture.md): Apply Vision algorithms to identify objects in real-time video.
- [Understanding a Dice Roll with Vision and Object Detection](../coreml/understanding-a-dice-roll-with-vision-and-object-detection.md): Detect dice position and values shown in a camera frame, and determine the end of a roll by leveraging a dice detection model.
- [VNRecognizedObjectObservation](vnrecognizedobjectobservation.md): A detected object observation with an array of classification labels that classify the recognized object.

### Request progress tracking

- [VNRequestProgressProviding](vnrequestprogressproviding.md): A protocol for providing progress information on long-running tasks in Vision.
- [VNRequestProgressHandler](vnrequestprogresshandler.md): A block executed at intervals during the processing of a Vision request.

### Horizon detection

- [VNDetectHorizonRequest](vndetecthorizonrequest.md): An image-analysis request that determines the horizon angle in an image.
- [VNHorizonObservation](vnhorizonobservation.md): The horizon angle information that an image-analysis request detects.

### Image alignment

- [Aligning Similar Images](aligning-similar-images.md): Construct a composite image from images that capture the same scene.
- [VNTargetedImageRequest](vntargetedimagerequest.md): The abstract superclass for image analysis requests that operate on both the processed image and a secondary image.
- [VNImageRegistrationRequest](vnimageregistrationrequest.md): The abstract superclass for image-analysis requests that align images according to their content.
- [VNTranslationalImageRegistrationRequest](vntranslationalimageregistrationrequest.md): An image-analysis request that determines the affine transform necessary to align the content of two images.
- [VNTrackTranslationalImageRegistrationRequest](vntracktranslationalimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the affine transform necessary to align the content of two images.
- [VNHomographicImageRegistrationRequest](vnhomographicimageregistrationrequest.md): An image-analysis request that determines the perspective warp matrix necessary to align the content of two images.
- [VNTrackHomographicImageRegistrationRequest](vntrackhomographicimageregistrationrequest.md): An image-analysis request, as a stateful request you track over time, that determines the perspective warp matrix necessary to align the content of two images.
- [VNImageAlignmentObservation](vnimagealignmentobservation.md): The abstract superclass for image-analysis results that describe the relative alignment of two images.
- [VNImageTranslationAlignmentObservation](vnimagetranslationalignmentobservation.md): Affine transform information that an image-alignment request produces.
- [VNImageHomographicAlignmentObservation](vnimagehomographicalignmentobservation.md): An object that represents a perspective warp transformation.

### Image background removal

- [Applying visual effects to foreground subjects](applying-visual-effects-to-foreground-subjects.md): Segment the foreground subjects of an image and composite them to a new background with visual effects.
- [VNInstanceMaskObservation](vninstancemaskobservation.md): An observation that contains an instance mask that labels instances in the mask.
- [VNGenerateForegroundInstanceMaskRequest](vngenerateforegroundinstancemaskrequest.md): A request that generates an instance mask of noticable objects to separate from the background.
- [VNGenerateForegroundInstanceMaskRequestRevision1](vngenerateforegroundinstancemaskrequestrevision1.md): A constant for specifying the first revision of the foreground instance mask request.

### Machine learning image analysis

- [Classifying Images with Vision and Core ML](../coreml/classifying-images-with-vision-and-core-ml.md): Crop and scale photos using the Vision framework and classify them with a Core ML model.
- [Training a Create ML Model to Classify Flowers](training-a-create-ml-model-to-classify-flowers.md): Train a flower classifier using Create ML in Swift Playgrounds, and apply the resulting model to real-time image classification using Vision.
- [VNCoreMLRequest](vncoremlrequest.md): An image-analysis request that uses a Core ML model to process images.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
- [VNPixelBufferObservation](vnpixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
- [VNCoreMLFeatureValueObservation](vncoremlfeaturevalueobservation.md): An object that represents a collection of key-value information that a Core ML image-analysis request produces.

### Coordinate conversion

- [VNImagePointForNormalizedPoint](vnimagepointfornormalizedpoint%28______%29.md): Projects a point in normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePoint](vnnormalizedpointforimagepoint%28______%29.md): Projects a point from image coordinates into normalized coordinates.
- [VNImagePointForNormalizedPointUsingRegionOfInterest](vnimagepointfornormalizedpointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedPointForImagePointUsingRegionOfInterest](vnnormalizedpointforimagepointusingregionofinterest%28________%29.md): Projects a point from a region of interest within the image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRect](vnimagerectfornormalizedrect%28______%29.md): Projects a rectangle from normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRect](vnnormalizedrectforimagerect%28______%29.md): Projects a rectangle from image coordinates into normalized coordinates.
- [VNImageRectForNormalizedRectUsingRegionOfInterest](vnimagerectfornormalizedrectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the normalized coordinates into image coordinates.
- [VNNormalizedRectForImageRectUsingRegionOfInterest](vnnormalizedrectforimagerectusingregionofinterest%28________%29.md): Projects a rectangle from a region of interest within the image coordinates space into normalized coordinates.
- [VNNormalizedIdentityRect](vnnormalizedidentityrect.md): A normalized identity rectangle with an origin of zero and unit length and width.
- [VNNormalizedRectIsIdentityRect](vnnormalizedrectisidentityrect%28__%29.md): Returns a Boolean value that indicates whether the rectangle has an origin of zero and unit length and width.
- [VNImagePointForFaceLandmarkPoint](vnimagepointforfacelandmarkpoint%28________%29.md): Returns the image coordinates of a specified face landmark point.
- [VNNormalizedFaceBoundingBoxPointForLandmarkPoint](vnnormalizedfaceboundingboxpointforlandmarkpoint%28________%29.md): Returns the coordinates of a specified face landmark point, in bounding box coordinates.

### Utilities

- [VNComputeStage](vncomputestage.md): Types that represent the compute stage.
- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

### Common data types

- [VNCircle](vncircle.md): An immutable 2D circle represented by its center point and radius.
- [VNVector](vnvector.md): An immutable 2D vector represented by its x-axis and y-axis projections.

### Errors

- [VNErrorDomain](vnerrordomain.md): The domain of errors that the framework generates.
- [VNErrorCode](vnerrorcode.md): Constants that identify errors from the framework.

### Version and revision numbers

- [VNVisionVersionNumber](vnvisionversionnumber.md): The current version number of the Vision framework.
- [VNDetectAnimalBodyPoseRequestRevision1](vndetectanimalbodyposerequestrevision1.md): A value that indicates the first revision for an animal body-pose request.
- [VNDetectHumanBodyPose3DRequestRevision1](vndetecthumanbodypose3drequestrevision1.md): A value that indicates the first revision for a human 3D body pose request.
- [VNTrackHomographicImageRegistrationRequestRevision1](vntrackhomographicimageregistrationrequestrevision1.md): A value that indicates the first revision for a homographic image-registration request.
- [VNTrackTranslationalImageRegistrationRequestRevision1](vntracktranslationalimageregistrationrequestrevision1.md): A value that indicates the first revision for a translational image-registration request.
- [VNTrackOpticalFlowRequestRevision1](vntrackopticalflowrequestrevision1.md): A value that indicates the first revision for an optial-flow request.
- [VNClassifyImageRequestRevision1](vnclassifyimagerequestrevision1.md): A constant for specifying the first revision of the image-classification request.
- [VNClassifyImageRequestRevision2](vnclassifyimagerequestrevision2.md): A value that indicates the second revision for an image-classification request.
- [VNGenerateObjectnessBasedSaliencyImageRequestRevision2](vngenerateobjectnessbasedsaliencyimagerequestrevision2.md): A value that indicates the second revision for an image-classification request.
- [VNGenerateAttentionBasedSaliencyImageRequestRevision2](vngenerateattentionbasedsaliencyimagerequestrevision2.md): A value that indicates the second revision for an attention-saliency image request.
- [VNGenerateImageFeaturePrintRequestRevision1](vngenerateimagefeatureprintrequestrevision1.md): A constant for specifying the first revision of the feature-print request.
- [VNGenerateImageFeaturePrintRequestRevision2](vngenerateimagefeatureprintrequestrevision2.md): A value that indicates the second revision for a feature-print request.
- [VNDetectFaceCaptureQualityRequestRevision3](vndetectfacecapturequalityrequestrevision3.md): A value that indicates the third revision for a face capture-quality request.
- [VNDetectBarcodesRequestRevision4](vndetectbarcodesrequestrevision4.md): A value that indicates the fourth revision for a barcode request.
- [VNCalculateImageAestheticsScoresRequestRevision1](vncalculateimageaestheticsscoresrequestrevision1.md): A value that indicates the first revision for an aesthetics scores request.
- [VNRequestRevisionUnspecified](vnrequestrevisionunspecified.md): A constant for specifying an unspecified request revision.

### Macros

- [Macros](vision-macros.md)
