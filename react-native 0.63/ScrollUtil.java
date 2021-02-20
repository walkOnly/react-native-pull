package com.huanqiu.news.rn_patch_hqw;

import android.util.Log;

public class ScrollUtil {

    private static final String TAG = "ScrollUtil";

    public static int getDirection(float dx, float dy) {
//        Log.d(TAG, "getDirection(): " + dx + ' ' + dy);
        if (Math.abs(dx) > Math.abs(dy)) {
            // X轴移动
            return dx > 0 ? 'R' : 'L';
        } else {
            // Y轴移动
            return dy > 0 ? 'D' : 'U';
        }
    }

    public static boolean isHorizontalGesture(float dx, float dy) {
        return Math.abs(dx) > Math.abs(dy);
    }

    public static boolean isVerticalGesture(float dx, float dy) {
        return Math.abs(dx) < Math.abs(dy);
    }

    public static boolean isDownGesture(float dx, float dy) {
        return (Math.abs(dx) < Math.abs(dy)) && (dy > 0);
    }

    public static boolean isUpGesture(float dx, float dy) {
        return (Math.abs(dx) < Math.abs(dy)) && (dy < 0);
    }

}
